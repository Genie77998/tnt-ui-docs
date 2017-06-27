/*
* @Author: wj77998
* @Date:   2017-03-16 15:46:58
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-15 10:08:11
*/
'use strict';
import React, { Component } from 'react'
import navList from './../router/navList' 
import classnames from 'classnames'


export default class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active : true
		}
	}
	routerGo(path){
		if (!this.context.router.isActive(path)) {
			this.state = {
				active : false
			}
			this.context.router.push({
					pathname : path
			})
	    }
	}
	renderItem(val,index){
		const _class = this.context.router.isActive(val.path) ? 'active' : ''
		return(
			<li 
				key={index}
				className={_class}
			>
				<a 
					href="javascript:;"
					onClick={this.routerGo.bind(this,val.path)}
				>
					{val.path.replace('/', '').replace(/^[a-z]/, (s) => s.toUpperCase())}
				</a>
			</li>
		)
	}
	ToggleNav(){
		const {active} = this.state;
		this.setState({
			active : !active
		})
	}
	render() {
		const { active } = this.state;
		const acClass = active ? 'active' : ''
		return (
			<div>
				<header>
					<a 
						className="logo"
						href="#/home"
					>
						tnt-ui
					</a>
					<a 
						className="link-github"
						href="https://github.com/Genie77998/tnt-ui"
					>
						github
					</a>
					<span 
						className="icon-nav"
						onClick={this.ToggleNav.bind(this)}
					/>
				</header>
				<div className={classnames("nav-list",acClass)}>
					<ul>
						{navList.map(this.renderItem.bind(this))}
					</ul>
				</div>
				<div className="content">
					<div className="main">{this.props.children}</div>
				</div>
			</div>
		);
	}
}


Nav.contextTypes = {
  router: React.PropTypes.object.isRequired
}
