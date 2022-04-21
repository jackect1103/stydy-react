import { useState, useCallback, PureComponent } from 'react'
let lastOnClick = null;
class Test extends PureComponent {
  
  render() {
    let {text,onClick} = this.props
    console.log("Test Render",lastOnClick === onClick)
    lastOnClick = onClick
    console.log('first', lastOnClick , onClick)
    return <div>
      <h1>{text}</h1>
      <button onClick={onClick}>改变文本</button>
    </div>
  }
}
const Parent = () => {
  console.log("Parent Render")
  const [txt, setTxt] = useState(123)
  const [n, setN] = useState(0)
  const hhh = useCallback(() =>{
    setTxt(456)
  },[])
  return (
    <div>
      <Test text={txt} onClick={hhh}></Test>
      <input type="number" value={n}
        onChange={e => {
          setN(parseInt(e.target.value))
        }
        }></input>
    </div>
  )
}

export default Parent