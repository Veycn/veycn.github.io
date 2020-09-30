import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './style/header.scss'
export default class Header extends Component {
  render() {
    return (
      <header className='header flex f-d-r f-jc-sb'>
        <div className='sign-content'>
          <span className='logo'>V E Y . X P</span>
          <span className='sign'>Some one wants to bury you, but you should know that you are the seed.</span>
        </div>
        <div className='routes'>
          <Link to='/' className='router-link'>首页</Link>
          <Link to='/about' className='router-link'>关于</Link>
          <Link to='/tags' className='router-link'>标签</Link>
          <Link to='/photos' className='router-link'>照片</Link>
          <Link to='/contact' className='router-link'>联系</Link>
        </div>
      </header>
    )
  }
}
