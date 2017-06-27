/*
* @Author: wj77998
* @Date:   2017-03-16 17:04:25
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-27 10:54:06
*/

'use strict';

let navList = [
  {
    path: '/lazy-load',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/lazy-load')["default"])
      },'lazy-load')
    }
  },
  {
    path: '/switch',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/switch')["default"])
      },'switch')
    }
  },
  {
    path: '/select',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/select')["default"])
      },'select')
    }
  },
  {
    path: '/swiper',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/swiper')["default"])
      },'swiper')
    }
  },
  {
    path: '/score',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/score')["default"])
      },'score')
    }
  },
  {
    path: '/toast',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/toast')["default"])
      },'toast')
    }
  },
  {
    path: '/list-item',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/list-item')["default"])
      },'list-item')
    }
  },{
    path: '*',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/notFound')["default"])
      },'not-found')
    }
  }
]

module.exports = navList
