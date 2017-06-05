/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-05 17:52:11
*/
     
import React from 'react'
import { render } from 'react-dom'
import {Route, Router, hashHistory} from 'react-router'
import routes from "./router"
import "./assets/index"

function scrollTop () {
  window.scrollTo(0, 0)
}

const app = document.getElementById('app')

render( 
	<Router onUpdate={scrollTop} routes={routes} history={hashHistory} />
	,
    app
)
