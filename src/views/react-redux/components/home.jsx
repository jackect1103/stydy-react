import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import { addAction } from "../../../store/actionCreators";

class Home extends PureComponent{
  render(){
    return (
      <div>
        <h1>home</h1>
        <h2>当前:{this.props.counter}</h2>
        <button onClick={e=>this.props.increament()}>+1</button>
        <button onClick={e=>this.props.addnumber(5)}>+5</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    counter:state.counter,
    banners:state.banners,
    recommends:state.recommends
  }
}

const mapDispachToProp  = dispatch  => {
  return {
    increament(){
      dispatch(addAction(1))
    },
    addnumber(num){
     dispatch(addAction(num))
    },
    getHomeMultidata(){
      // dispatch(getHomeMultidataAction)
    }
  }
}


export default connect(mapStateToProps,mapDispachToProp)(Home)

