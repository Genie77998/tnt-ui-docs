/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 19:02:22
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntSwitch} from 'tnt-ui'
export default class Switch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active : true
		}
	}
	render() {
		const {active} = this.state
		return (
			<div>
				<div className="header">
		          <h1>Switch</h1>
		        </div>
		        <Code
		        	toggleView = {false}
		        >
{`
	import { TntSwiper } from 'tnt-ui'
	\n
	<TntSwitch 
		disabled: PropTypes.bool, //只读
		defaultValue: PropTypes.bool, //默认值
		style: PropTypes.object, //最外层style
		prefixCls: PropTypes.string, //类名前缀 
		onChange: PropTypes.func, //改变之后事件
		className: PropTypes.string, //额外类名
		checkedTxt : PropTypes.string, //选中文字
		uncheckedTxt : PropTypes.string, //未选中文字
	/>
`}
				</Code>
		        <h2>Example</h2>
		        <div className="docs-example">
		        	<TntSwitch/><p/>
		        	<TntSwitch
		        		disabled={true}
		        	/><p/>
		        	<TntSwitch
		        		checkedTxt={"开"}
		        		uncheckedTxt={"关"}
		        	/><p/>
		        	<TntSwitch
		        		style={{fontSize:12}}
		        	/><p/>
		        	<TntSwitch
		        		defaultValue={active}
		        		onChange={(val) => {
		        			this.setState({
		        				active : val
		        			})
		        		}}
		        	/>
		        	<span>{active?"ON":"OFF"}</span>
		       	</div>
		       	<Code>
{`
<TntSwitch/>
<TntSwitch
	disabled={true}
/>
<TntSwitch
	checkedTxt={"开"}
	uncheckedTxt={"关"}
/>
<TntSwitch
	style={{fontSize:12}}
/>
<TntSwitch
	defaultValue={active}
	onChange={(val) => {
		this.setState({
			active : val
		})
	}}
/>
<span>{active?"ON":"OFF"}</span>
`}
				</Code>
			</div>
		);
	}
}
