import React from "react"
import { Typography } from "antd"

// memo优化策略 类似 class 组件中的shouldComponentUpdate 
function areEqual(prevProps, nextProps) {
  return (
    prevProps.checked === nextProps.checked
  )
}

const ItemCard = React.memo((props)=>{

  const { item, checked, onCheckedChange } = props
  const { name, price } = item
  const onWrapCheckedChange = (e) => {
    const { checked } = e.target
    onCheckedChange(item, checked)
  }

  console.log('first')
  return (
    <label className="item-card">
      <div className="checkbox-wrap">
        <input
          type="checkbox"
          checked={checked}
          onChange={onWrapCheckedChange}
        />
      </div>
      <span className="item-info">
        {name} <Typography.Text mark>${price}</Typography.Text>
      </span>
    </label>
  )
},areEqual)

export default ItemCard