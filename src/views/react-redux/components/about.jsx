import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import { subAction } from "../../../store/actionCreators";



class About extends PureComponent{
  render(){
    return (
      <div>
        <br />
        <hr />
        <h1>about</h1>
        <h2>当前:{this.props.counter}</h2>
        <button onClick={e=>this.props.decreament()}>-1</button>
        <button onClick={e=>this.props.removenumber(5)}>-5</button>
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
    decreament(){
      dispatch(subAction(1))
    },
    removenumber(num){
     dispatch(subAction(num))
    },
    getHomeMultidata(){
      // dispatch(getHomeMultidataAction)
    }
  }
}


export default connect(mapStateToProps,mapDispachToProp)(About)