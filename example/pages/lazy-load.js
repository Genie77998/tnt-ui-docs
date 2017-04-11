/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 19:00:15
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntLazyLoad} from 'tnt-ui'

const images = ["img/album-1.jpg","img/album-2.jpg","img/album-3.jpg","img/album-4.jpg","img/album-5.jpg"]

export default class LazyLoad extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const Img = [];
		images.forEach(function(val,index){
			Img.push(
				<div
					key={`box.${index}`}
				>
					<TntLazyLoad 
						key={`img.${index}`}
					  	src={`https://toddmotto.com/labs/echo/${val}`}
					  	placeholderW={450}
					  	placeholderH={450}
					/>
					<p 
						key={`pd.${index}`}
						style={{height:120}}
					></p>
				</div>
			);
		});
		return (
			<div>
				<div className="header">
		          <h1>LazyLoad</h1>
		        </div>
		        <Code
		        	toggleView = {false}
		        >
{`
	import { TntLazyLoad } from 'tnt-ui'
	\n
	<TntLazyLoad 
		offset : PropTypes.number, //触发距离
		placeholderW : PropTypes.string //默认显示宽度
		placeholderH : PropTypes.string //默认显示高度
		placeholder: PropTypes.string, //默认显示图片
		src: PropTypes.string, //图片地址
		style : PropTypes.object, //图片样式
		alt : PropTypes.string, //图片描述
		onChange : PropTypes.func //替换图片回调
	/>
`}
				</Code>
				<h2>Example</h2>
				<div className="docs-example">
					{Img}
				</div>
			</div>
		);
	}
}
