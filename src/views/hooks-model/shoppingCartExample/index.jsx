import { List, Typography,Skeleton, Divider } from "antd"
import ItemCard from "./ItemCard"
import { useChecked } from "./use-checked"
import "./index.css"
import InfiniteScroll from 'react-infinite-scroll-component';

// const cartData = Array(Math.ceil(Math.random() * 10))
const cartData = Array(25)
  .fill(undefined)
  .map((v, i) => ({
    id: i,
    name: `商品${i+1}`,
    price: Math.round(Math.random() * 100),
  }))

// cartItems的积分总和
const sumPrice = (cartItems) => {
  return cartItems.reduce((sum, cur) => sum + cur.price, 0)
}



export default function Card() {
  const {
    checkedAll,
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    filterChecked,
  } = useChecked(cartData)

  const onWrapCheckedAllChange = (e) => {
    const checkAll = e.target.checked
    onCheckedAllChange(checkAll)
  }
  const total = sumPrice(filterChecked())
  const Footer = (
    <div className="footer">
      <label className="check-all">
        <input type="checkbox" checked={checkedAll} onChange={onWrapCheckedAllChange}/> 全选
      </label>
      <div>
        价格总计 <Typography.Text mark>${total}</Typography.Text>
      </div>
    </div>
  )
  
  const loadMoreData = () => {
    Array(10).fill(undefined).forEach((v, i) => (
      cartData.push({
        id: cartData.length + 1,
        name: `商品${cartData.length + 1}`,
        price: Math.round(Math.random() * 100),
      })
    ))
    console.log('loadMoreData')
  }
  return (
    <div id="scrollableDiv">
      <InfiniteScroll
        dataLength={cartData.length}
        next={loadMoreData}
        hasMore={cartData.length < 25}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          header={<div>购物车</div>}
          footer={Footer}
          bordered
          dataSource={cartData}
          renderItem={item => {
            const checked = checkedMap[item.id] || false
            return (
              <List.Item>
                <ItemCard item={item} checked={checked} onCheckedChange={onCheckedChange}></ItemCard>
              </List.Item>
            )
          }}
        />
      </InfiniteScroll>
    </div>
  )
}