/*
* @Author: wj77998
* @Date:   2017-06-27 10:47:07
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-27 10:52:15
*/

'use strict';



import React, { Component, PropTypes } from 'react'

let notFoundImg = require('./../assets/404.jpg');
export default class NotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={{textAlign:"center",paddingTop:30}}>
				<img src={notFoundImg}  />
			</div>
		);
	}
}

