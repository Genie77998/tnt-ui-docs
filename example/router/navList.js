/*
* @Author: wj77998
* @Date:   2017-03-16 17:04:25
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-05 17:18:14
*/

'use strict';

let navList = [
  {
    path: '/lazy-load',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/lazy-load')["default"])
      },'lazy-load')
    },
    componentBase: __DEBUG__ ? require('./../pages/lazy-load') : null
  },
  {
    path: '/switch',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/switch')["default"])
      },'switch')
    },
    componentBase: __DEBUG__ ?  require('./../pages/switch') : null
  },
  {
    path: '/select',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/select')["default"])
      },'select')
    },
    componentBase: __DEBUG__ ? require('./../pages/select')  : null
  },
  {
    path: '/swiper',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/swiper')["default"])
      },'swiper')
    },
    componentBase: __DEBUG__ ? require('./../pages/swiper') : null
  },
  {
    path: '/score',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/score')["default"])
      },'score')
    },
    componentBase: __DEBUG__ ? require('./../pages/score') : null
  },
  {
    path: '/toast',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/toast')["default"])
      },'toast')
    },
    componentBase: __DEBUG__ ? require('./../pages/toast') : null
  },
  {
    path: '/list-item',
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('./../pages/list-item')["default"])
      },'list-item')
    },
    componentBase: __DEBUG__ ? require('./../pages/list-item') : null
  }
]

module.exports = navList
