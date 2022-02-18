/*
 * @Author: your name
 * @Date: 2022-02-18 17:40:50
 * @LastEditTime: 2022-02-18 18:10:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\components\ReactMarkdown.jsx
 */
import ReactMarkdown from 'react-markdown'
// import gfm from 'remark-gfm'; //这个是插件，为了识别gfm格式的markdown
const MarkDown = (props) => {
  console.log('props', props)
  return (
    <ReactMarkdown headingTopOffset={80} ordered={false}>
      {props.source}
    </ReactMarkdown>
  )
}

export default MarkDown