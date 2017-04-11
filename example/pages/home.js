/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-20 14:59:09
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
export default class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="header">
		          <h1
                onClick={()=>{
                  location.href="https://github.com/Genie77998/tnt-ui"
                }}
              >tnt-ui</h1>
		        </div>
            <h2>Install</h2>
            <Code
              toggleView = {false}
            >
{`
  npm install tnt-ui --save
`}
            </Code>
            <h2>Usage</h2>
            <Code
              toggleView = {false}
            >
{`
  import { TntScore } from 'tnt-ui';
  ReactDOM.render(
      <TntScore
      defaultValue={ 3.5 }
      style={{ fontSize: 16,margin:20 }}
      allowHalf
  />, app);
`}
            </Code>
            <h2>按需加载</h2>
            <Code
              toggleView = {false}
            >
{`
    使用 babel-plugin-import
    .babelrc or babel-loader 配置
    {
      "plugins": [
        ["import", { libraryName: "tnt-ui"}]
      ]
    }

    或者

    import TntScore from 'tnt-ui/lib/tnt-score'
`}
            </Code>
            <h2>浏览器引入</h2>
            <Code
              toggleView = {false}
            >
{`
  tnt-ui的npm包内dist目录有js和css文件在在文件引用即可 
  全局变量名 tntui

    例如：  
      ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(tntui.TntScore, {
          defaultValue: 3.5,
          style: { fontSize: 16, margin: 20 },
          allowHalf: true
        })
      ), document.getElementById('app'));
`}
            </Code>
			</div>
		);
	}
}
