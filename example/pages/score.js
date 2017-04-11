/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 19:01:11
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntScore} from 'tnt-ui'
export default class Score extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value : 3
		}
	}
	render() {
		const value = this.state.value
		return (
			<div>
				<div className="header">
		          <h1>Score</h1>
		        </div>
		        <Code
		        	toggleView = {false}
		        >
{`
	import { TntScore } from 'tnt-ui'
	\n
	<TntScore 
		disabled: PropTypes.bool, //只读
		defaultValue: PropTypes.number, //默认值
		count: PropTypes.number, //个数
		allowHalf: PropTypes.bool, //是否允许半颗
		style: PropTypes.object, //最外层style
		prefixCls: PropTypes.string, //类名前缀
		onChange: PropTypes.func, //改变之后事件
		className: PropTypes.string //额外类名
	/>
`}
				</Code>
				<h2>Example</h2>
		        <div className="docs-example">
		        	<TntScore/>
		        	<p/>
		        	<TntScore
		        		disabled
		        		defaultValue={3.5}
		        		count={10}
		        	/>
		        	<span>只读</span><p/>
		        	<TntScore
			        	defaultValue={value}
		        		allowHalf
		        		onChange={(val)=>{
		        			this.setState({
		        				value : val
		        			})
		        		}}
		        	/><span>{value}</span><p/>
		        	<TntScore
		        		style={{fontSize:10}}
		        	/>
		       	</div>
		       	<Code>
{`
<TntScore/>
<TntScore
	disabled
	defaultValue={3.5}
	count={10}
/>
<TntScore
	allowHalf={true}
/>
<TntScore
	defaultValue={value}
	allowHalf
	onChange={(val)=>{
		this.setState({
			value : val
		})
	}}
/><span>{val}</span>
<TntScore
	style={{fontSize:10}}
/>
`}
				</Code>
			</div>
		);
	}
}
