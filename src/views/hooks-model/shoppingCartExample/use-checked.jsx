import { useReducer, useEffect, useCallback } from "react"
const CHECKED_CHANGE = "CHECKED_CHANGE"; //单选
const CHECKED_ALL_CHANGE = "CHECKED_ALL_CHANGE"; // 全选
const SET_CHECKED_MAP = "SET_CHECKED_MAP";

export const useChecked = (dataSource) => {
  // 集中管理checkedMap对象
  const [checkedMap, dispatch] = useReducer((checkedMapParam, action) => {
    switch (action.type) {
      case CHECKED_CHANGE: {
        const { payload } = action
        const { dataItem, checked } = payload
        const { id } = dataItem
        return {
          ...checkedMapParam,
          [id]: checked,
        }
      }
      case CHECKED_ALL_CHANGE: {
        const { payload: newCheckedAll } = action
        const newCheckedMap = {}
        // 全选
        if (newCheckedAll) {
          dataSource.forEach(dataItem => {
            newCheckedMap[dataItem.id] = true
          })
        }
        return newCheckedMap
      }
      case SET_CHECKED_MAP: {
        return action.payload
      }
      default:
        return checkedMapParam
    }

  }, {})

  const filterChecked = useCallback((func) => {
    return (
      Object.entries(checkedMap)
      // 通过这个filter 筛选出所有checked状态为true的项
      .filter((entries) => Boolean(entries[1]))
      // 再从cartData中根据id来map出选中列表
      .map(([checkedId]) => dataSource.find(({ id }) => id === Number(checkedId)))
    )
  },[checkedMap, dataSource])

  // 单选按钮 useCallback用于有啊性能
  const onCheckedChange = useCallback((dataItem, checked) => {
    dispatch({
      type: CHECKED_CHANGE,
      payload: {
        dataItem,
        checked,
      },
    })
  }, [])

  // 全选按钮属性、事件
  let checkedAll = dataSource.length !== 0 && filterChecked().length === dataSource.length;
  const onCheckedAllChange = (newCheckedAll) => {
    dispatch({
      type: CHECKED_ALL_CHANGE,
      payload: newCheckedAll,
    })
  }

  // 数据更新的时候 如果勾选中的数据已经不在数据内了 就删除掉
  useEffect(() => {
    filterChecked().forEach((checkedItem) => {
      let changed = false
      if (!dataSource.find(dataItem => checkedItem.id === dataItem.id)) {
        delete checkedMap[checkedItem.id]
        changed = true
      }
      if (changed) {
        dispatch({
          type: SET_CHECKED_MAP,
          payload: Object.assign({}, checkedMap),
        })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource])

  return {
    checkedMap,
    onCheckedChange,
    filterChecked,
    onCheckedAllChange,
    checkedAll,
  }
}