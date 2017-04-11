/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 18:50:22
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import { TntToast } from 'tnt-ui'
const loadingIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAD40lEQVR4Ac2aNZjlRgzHtXTMV4W5/8J0XG+Z5JIcLFdhTro0x7v7+JiZmZlRmkN/r3zVMTP6KRzLj8H2+Kfa4/+wRhKUBlfSm6qRxuFqOkkJvEIP6SFeoQSdxNU0TjXSm1wJ3qCeVl/harqOnNvoOq5WX6mnwT0SnWgYbiETuXAjE7fQsEQncBqjG/6I55FLtPP4o9ENnIKr1fd4BblMu6K+52ooH+yHp5AdslPYr7yJ6oBhSmZp/C5uUaOxjt47/mK8r9HB6BDve/xFeg/r1Gjcgnczf0VJDBsdoDROvUyYsdGLFKD+uZs1OlB/CtDFjN/jqZeheGgI3sjQ2B6qLXwlcDXV0p4Mom7QECgO/JgepjWzC/uVuAp3Wa3s42ncyjFz0WgoHGpJO23Oqc+gDNRneA4Z+SiHeezfNi65eHLho5MihzZiTygT7Ekbkbfy2P9tQnLJ7wWtnbTJanXmXuJKbBWC/rTW5MqWvDvLvpTpAdaBgxxqDielpKC5/s3cmxVtci6p98Fhlte1mlLSlBs5DhAM20dHyHGQBV+Ot43SvANZt2fKqVwHLrEgKgWNTy5tyniIpdxZreAisw5JSdG7XAOpqO/tG91dj29XdeyKlDR/abq/c0Ueg9gTXGbWa3Jxt5orngUJ/ijHR30GHjBnqhyjWZtszqnNG9wFnsAVsRuWoDZzVS/rdB6GLKwfeMTSJjlGs2dZE7ZFLOfd4CGTrlmCQrf+f9jIy5RqwUOW/CbHaO4/c4NfS2+Qq8FDuDryWEzaOvgLWiMEBcBj5ogjMnz9b6dAvkKpP3jMquHyEol1A3pTviSMDuAxRoegKVZRC6hGIWgLaGDqBUvQzKVA48QJPRo0MHeHJWjyGcDVNodDA0taLUGxS0AnxZJ+DzSwbJjYZ/eBEpag4y+CBta9IV4iJki3I94XNBDvK09rkI8euem93Pj+FuS7KdO/qI+/GPhfTvtjH2x7em/x/4IWXPTBwYh1x3gxB/60xXxsjQ+uDjVazNE47Zer3YFWjT5wP2SAlN7U7qBRf5mO4ErtLiwFxAyt9oGTL0PH6ivtzyCqlYka9XSmh+IeTwXtkXtc+1Ma+8n/0jAtwQYJ7pIprEQnzeEY9RmysB81B6ywJ56T2TSjm9aQHlfSRtucfK856Imt9sQeV2sNC2NdSlKvn9bAuXqfHiALC2tNLRz/gC7Z84tGB43JF6xLGZ0bp17Wmp6yt0wPaYjmBJ40MvFj7SlOKYdatCeB5WThx86kyXcXnSbfXX6aXH8hgf5SC/3FKP4v19Ff0KS/5Msl1NP4Na0ppCiO1siiOJfhKrfKBv8A/3xZCWbeb+sAAAAASUVORK5CYII=";
export default class Toast extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="header">
		          <h1>Toast</h1>
		        </div>
				<Code
					toggleView = {false}
				>
{`
	import { TntToast } from 'tnt-ui'
	\n
	TntToast({
		msg = { string } //提示内容
		duration = { num } //消失时间
		style = { object } //样式
		icon = { string } //图标
		autoClose = { bool } //是否自动关闭
		animation = { bool } //图片是否旋转
	});
	\n
	TntToast.hide  //关闭弹层
`}
				</Code>
				<h2>Example</h2>
				<div className="docs-example">
					<button onClick={()=>{
						TntToast({
							msg : "加载中..." ,
							animation:true,
							autoClose : false,
							icon : loadingIcon
						});
					}}>显示loading</button>
					<p/>
					<button onClick={()=>{
						TntToast.hide();
					}}>隐藏loading</button>
					<p/>
					<button onClick={()=>{
						TntToast({
							msg : "测试Totas"
						})
					}}>totas</button>
					<p/>
					<button onClick={()=>{
						TntToast({
							msg : "加载中..." ,
							animation:true,
							duration : 3000,
							style : {
								height : '100%',
								backgroundColor:'rgba(255,255,255,0.7)'
							},
							icon : loadingIcon
						});
					}}>全屏幕显示loading</button>
				</div>    
				<Code>
{`
	<button onClick={()=>{
		TntToast({
			msg : "加载中..." ,
			animation:true,
			autoClose : false,
			icon : ${loadingIcon}
		});
	}}>显示loading</button>
	<button onClick={()=>{ 
		TntToast.hide();
	}}>隐藏loading</button>
	<button onClick={()=>{
		TntToast({
			msg : "测试Totas"
		})
	}}>totas</button>
	<button onClick={()=>{
		TntToast({
			msg : "加载中..." ,
			animation:true,
			duration : 3000,
			style : {
				height : '100%',
				backgroundColor:'rgba(255,255,255,0.7)'
			},
			icon : ${loadingIcon} 
		});
	}}>全屏幕显示loading</button>
`}
				</Code>
			</div>
		);
	}
}
