/*
* @Author: wj77998
* @Date:   2017-03-21 15:41:27
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-04-11 16:34:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntListItem} from 'tnt-ui'
const _wx = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAACIlBMVEUAAAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzAAwzADioVwJAAAAtXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBETFRYXGBocHSAhIiMkJSYnKCorLC0uMDQ3Ojw9Pj9AQUJDRUZHSEpLTVFSVVdYWVpbXV9gYWJkZWhpamtvcHJ1dnh5en+AgYSHiouMjY6QkpWWl5iZmpucnZ6foaKjpKWmp6irrbCxsrO0tba3uru8vb7BwsTFxsjMz9DR09TW19jZ3N3e3+Dh4uPk5ebo6uvs7e7v8PHy8/T19vf4+fr7/P3+i9L5OgAAA4xJREFUWMOt2PtfS2EcB/DvlK1WLknlEkUhEZEQWZLKcheSqOQ691xyl+QSJoVSicrlbOuiWvv8f35o57Tt7HnO2fZ8f9rznOd5v87Zec5z+RLJYbbY7E6EHE67zWKmwEiqdSHscJ1N8tesEiIKyeqDGRsRcTQaFa0ZAqJZ9hohJBq9/xsEhZWIKEkSxUlJRFQLYVFLZHaJ41xmskBgWMgmkrORXSRnJ6dIzkkQGjzO3WN/+6FzWATXf6E4LXr6q1m45WSbJxJu4naOwX8CS6nsDZu7mUrqiC7/Hhb3dSMFj7g6T+jcw3nEjPxfoXKXo4gTad2hcTcMxI3F/aFwbUbSiNUj+jnnErnXzmv3CmeMDRebDsi3Xa6fOy73rwKAArlUBABHvAVDq15uMFYGHABwRS61AcBruZStl6tWnq4HAOrl0jMAeKpcfKWTW6X02O4C/qbLpYwfwESecrFMH9fv8wITC0uTfb6HglLvd2danpW1Xh/3SGOMxBff6vIAY5JbF1fPxZY2jKC9pjDdREQJayvuOrS4Kg5mqv43XL/Sr6boHZ+rZmupH3E5WVVb8JXHNTC17KGBTcHqYxs43AuWlvmnPYVxqXyKyTlmBe+S0P05kXnju6aYwzg3eI8bUirnJR1lcteDtl+HEt4AMjxncRNLg7V/2SbPTYeHHafkZ/w9et67bi6bYE1Q94Joy7FDHsgeADlERBQzAig3bWPOxhY1d2JAfkPLAGB6mYv9B6DMW7+WyUmZKq5l5h+tHB897X3wkhH3NWUh6GcuPX2LArmhgz7nj+iZVdw0U93EXhj7VvhrZmzXWo2ohrNs/873a5rMGo0+UcXbVHh2+zadi22a3FnulifPr+3kPk3uAY8b9N9WdDRoabOGeNxFIjJWdLae2bMmnohs37S4fO6GLI9mV/R5f49J0iQ2anBPeNygqTRgkn3M1zZz93df1DP2Vp42p0vvzl1ZgBdw5qf7CJXDmxgmV4fQObTGMe7tHMLh8GlF0H1BU0CzSb2HqNFKk5o7pjpv6z+T9R2aH8hlRcABY4/2Z5mIiKLS9156nktEvZFwAICfHfbu8enhnUGBu4CeSA6g7iulIjlgXCynGk9iD+92samF92ITH1dFp2VEJo2ccUJTWnVCE26ORPHpQGHJyjvyxqhFaCqVjHdEJnqJyOqI8C1YBSbJnXXqg0eYKfzhj1eL4hXkP+Ho6z605P0IAAAAAElFTkSuQmCC';
const _alipay = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAANlBMVEUhrOz///8hrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwhrOwZHxdWAAAAEXRSTlMAABAgMEBQYHCAkKCwwNDg8InUWv0AAAIwSURBVFjD7ZjZsqQgEESLXUCW+v+fnQf12sjatytmYiI6H1s9DVKVQgIcEi7irxWdYIdOmMcP5cWNMxk/VjYXziCJzIEjoiEaxgBEpsJlwQA8kskzEEgoAY4S5yBS4iIsvGF7Ks3vhZUZnAokOPvFfXEVLoVK5sK5+toM9zOUNf1lXLCV1PWsqa99C+V/wkVVSlw4Wf7u13BhseYCLW5xsjkMdc1d/3IpHn92Dc6T4PyFyyQ4NZrr27g0nOvbuKum+WoZ58uj9tDcIx3alnDZydfSEtqG3FyItIDLplWuctt/7pDDhShxjnc7QLlUNEyY48y4p8QWf6pEzR3loHFzfv52q8WTyKdWBcUuzpT3JaebA9VTv0scQDY2to+lnvko3FPVnQNGqF+q9nmISwCyf1xJtlpzbsIA5yZfglwDQWyph1MgJ826NyvcpSaOg504Sa/ES+KJA9jHHix71c0YeyGu4W7aJmocY0xsocTZJZpF9KKBY4xx7eL97vQK7ThJ76qFO7KA4wnddTDE+KCVld3E+b5L7LyiIWIyfIDLvJMJ5NsEzLObRReHFppN++KojXO0Vz0cSgDgNpeddS8ib/dgNB1c5Edn+9OlQuF1Kg3soYU7eU3xcWDgZQP3UhAPzTOlYGoc5tYZhZu0sjtIVjxxiGl7zFj59QzIqycOEYM9N8NC2f3NPCmatzdkHx8E/iWOODQijrSIAzfiOJA6rCSOUqmDXuoYmjokp4vw/wBDLjqRD8SRXQAAAABJRU5ErkJggg==';
const _style = {borderBottom : "1px solid #ddd"}

export default class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		const {active} = this.state
		return (
			<div>
				<div className="header">
		          <h1>ListItem</h1>
		        </div>
		        <Code
		        	toggleView = {false}
		        >
{`
	import { TntListItem } from 'tnt-ui'
	\n
	<TntListItem 
	    subtitle: PropTypes.string, //副标题
	    icon: PropTypes.string, //图标
	    iconSize : PropTypes.string, //图标大小  width|height
	    ishidden: PropTypes.bool, //超出是否隐藏
	    arrow: PropTypes.bool, //是否显示箭头
	    style: PropTypes.object, //最外层style
	    prefixCls: PropTypes.string, //类名前缀
	    onClick: PropTypes.func, //点击事件
	    className: PropTypes.string //额外类名
	/>
`}
				</Code>
		        <h2>Example</h2>
		        <div className="docs-example">
		        	<TntListItem
						icon={_wx}
						style={_style}
						subtitle="查看全部订单"
					>
						我的订单
					</TntListItem>
					<TntListItem
						icon={_alipay}
						iconSize="2.5em"
						style={_style}
					>
						售后/退款
					</TntListItem>
					<TntListItem
						icon={_wx}
						arrow={false}
						style={_style}
						onClick={()=>{console.log("click");}}
					>
						客服电话400-699-0000
					</TntListItem>
					<TntListItem
						style={_style}
						subtitle="描述"
					>
						<div>主标题</div>
						<div
							style={{color:"#888",fontSize:'.9em'}} 
						>副标题
						</div>
					</TntListItem>
					<TntListItem
						style={_style}
						subtitle="超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述"
					>
						超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题
					</TntListItem>
					<TntListItem
						style={_style}
						ishidden={false}
						subtitle="超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述"
					>
						超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题
					</TntListItem>
		       	</div>
		       	<Code>
{`
	const _style = {borderBottom : "1px solid #ddd"}

	render :
	
	<TntListItem
		icon={_wx}
		style={_style}
		subtitle="查看全部订单"
	>
		我的订单
	</TntListItem>
	<TntListItem
		icon={_alipay}
		iconSize="2.5em"
		style={_style}
	>
		售后/退款
	</TntListItem>
	<TntListItem
		icon={_wx}
		arrow={false}
		style={_style}
		onClick={()=>{console.log("click");}}
	>
		客服电话400-699-0000
	</TntListItem>
	<TntListItem
		style={_style}
		subtitle="描述"
	>
		<div>主标题</div>
		<div
			style={{color:"#888",fontSize:'.9em'}} 
		>副标题
		</div>
	</TntListItem>
	<TntListItem
		style={_style}
		subtitle="超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述"
	>
		超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题
	</TntListItem>
	<TntListItem
		style={_style}
		ishidden={false}
		subtitle="超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述超长描述"
	>
		超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题超长主标题
	</TntListItem>
`}
				</Code>
			</div>
		);
	}
}
