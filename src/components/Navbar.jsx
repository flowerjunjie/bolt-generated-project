import React from 'react'
    import { Link } from 'react-router-dom'
    import './Navbar.css'

    export default function Navbar({ user, logout }) {
      return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              语法学习系统
            </Link>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">首页</Link>
              </li>
              <li className="navbar-item">
                <Link to="/learning" className="navbar-link">学习</Link>
              </li>
              <li className="navbar-item">
                <Link to="/testing" className="navbar-link">测试</Link>
              </li>
              <li className="navbar-item">
                <Link to="/analytics" className="navbar-link">分析</Link>
              </li>
              {user ? (
                <li className="navbar-item">
                  <button onClick={logout} className="navbar-link auth-link">登出</button>
                </li>
              ) : (
                <li className="navbar-item">
                  <Link to="/auth" className="navbar-link auth-link">登录/注册</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )
    }
