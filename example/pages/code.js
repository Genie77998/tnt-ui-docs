/*
* @Author: wj77998
* @Date:   2017-03-16 17:01:47
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-21 10:09:00
*/

'use strict';
import React , { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'
export default class Code extends Component {
  constructor (props) {
      super(props)
      this.state = {
          showCode : props.toggleView ? false : true
      };
  }
  componentDidMount () {
    prettyPrint.prettyPrint(null, findDOMNode(this.code))
  }

  render () {
    const { toggleView } = this.props
    const { showCode } = this.state
    let lines = this.props.children.split('\n').filter(l => l.length > 0)
    const length = lines[0] ? /^(\s*)/.exec(lines[0])[1].length : 0
    const reg = new RegExp('^(\\s{' + length + '})')
    lines = lines.map(line => line.replace(reg, ''))
    const _active = !showCode ? 'hide' : '';
    const toggleViewEl = <div onClick={()=>{this.setState({showCode : !showCode})}} className={classnames('viewCode',_active)}>{!showCode ? '显示代码+' : '隐藏代码-'}</div>
    return (
      <div className="code">
        {toggleView ? toggleViewEl : null}
        <pre className={classnames("prettyprint","linenums",_active)}>
          {lines.join('\n')}
        </pre>
      </div>
    )
  }
};

Code.propTypes = {
  children: PropTypes.string,
  toggleView : PropTypes.bool
}

Code.defaultProps = {
  children: '',
  toggleView : true
}

