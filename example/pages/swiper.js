/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 18:56:47
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntSwiper} from 'tnt-ui'


const images = [
	{
		src : "https://toddmotto.com/labs/echo/img/album-1.jpg"
	},
	{
		src : "https://toddmotto.com/labs/echo/img/album-2.jpg"
	},
	{
		src : "https://toddmotto.com/labs/echo/img/album-3.jpg"
	},
	{
		component : <div>这是自定义component</div>
	}
]

export default class Swiper extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="header">
		          <h1>Swiper</h1>
		        </div>
		        <Code
		        	toggleView = {false}
		        >
{`
	import { TntSwiper } from 'tnt-ui'
	\n
	<TntSwiper 
	    	pagination = {bool}//是否显示分页器
		paginationType = {string}//分页器样式  bullets  圆点（默认） fraction  分式 progress 进度条
		startSlide = {number} //开始项 0开始
		onChange = {func} //滑动之后的事件
		onClick = {func} //点击事件
		className = {string} //额外类名
		transitionEnd = {func} //在结束幻灯片过渡动画之后
		swiping = {func} //滑动过程中事件
		images = {array}//图片 
		style = {object} //最外层样式 
		prefixCls = {string} //类名前缀 
		speed = {number} //切换速度
		auto = {number} //自动播放速度
		loop = {bool} //是否无限滚动
		disableScroll = {bool}//停止滚动
	/>
`}
				</Code>
				<h2>Example</h2>
				<div className="docs-example">
					<TntSwiper 
						ref="swiper"
					  	images={images}
					/>
					<button
						onClick={()=>{
							this.refs.swiper.sliderTo(0)
						}}
					>跳转至第一页</button>
					<p/>
					<button
						onClick={()=>{
							this.refs.swiper.sliderTo(-1)
						}}
					>跳转至最后一页</button>
				</div>
				<Code>
{`
	const images = [
		{
			src : "https://toddmotto.com/labs/echo/img/album-1.jpg"
		},
		{
			src : "https://toddmotto.com/labs/echo/img/album-2.jpg"
		},
		{
			src : "https://toddmotto.com/labs/echo/img/album-3.jpg"
		},
		{
			component : <div>这是自定义component</div>
		}
	]
	render:
	<TntSwiper 
		ref="swiper"
	  	images={images}
	/>
	<button
		onClick={()=>{
			this.refs.swiper.sliderTo(0)
		}}
	>跳转至第一页</button>
	<button
		onClick={()=>{
			this.refs.swiper.sliderTo(-1)
		}}
	>跳转至最后一页</button>
`}
				</Code>
			</div>
		);
	}
}
