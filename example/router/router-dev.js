/*
* @Author: wj77998
* @Date:   2017-03-16 15:44:37
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-05 17:18:02
*/

'use strict';
import React from 'react'
import Nav from './../pages/nav'
import Home from './../pages/home'
import NavList from './navList'

let childRoutes = [{ path: 'home' , component: Home}]

NavList.forEach(function(val){
	if (typeof val === 'object' && val.componentBase) {
	    childRoutes.push(
	      	{ path: val.path , component: val.componentBase["default"] }
	    )
	}
});

const routes = {
  path: '/',
  component: Nav,
  indexRoute : {component: Home},
  childRoutes: childRoutes
}
export default routes
