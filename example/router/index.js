/*
* @Author: wj77998
* @Date:   2017-03-16 15:44:37
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-27 10:45:05
*/

'use strict';
import React from 'react'
import NavList from './navList'


let childRoutes = [{ path: 'home' , getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./../pages/home')["default"])
    },'home')}
}];

NavList.forEach(function(val){
  if (typeof val === 'object' && val.getComponents) {
      childRoutes.push(
          { path: val.path , getComponents: val.getComponents }
      )
  }
});

const routes = {
  path: '/',
  indexRoute : {getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./../pages/home')["default"])
    },'home')
  }},
  getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./../pages/nav')["default"])
    },'nav')
  },
  childRoutes: childRoutes
}
export default routes 
