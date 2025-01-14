import React, { useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom'
    import axios from 'axios'
    import './Auth.css'

    export default function Auth() {
      const [isLogin, setIsLogin] = useState(true)
      const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
      })
      const [error, setError] = useState('')
      const navigate = useNavigate()

      const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const url = isLogin ? '/api/login' : '/api/register'
        try {
          const response = await axios.post(url, formData)
          localStorage.setItem('token', response.data.token)
          navigate('/')
        } catch (err) {
          setError(err.response?.data?.message || 'An error occurred')
        }
      }

      return (
        <div className="auth-container">
          <div className="auth-card">
            <h2>{isLogin ? '登录' : '注册'}</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label>用户名</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label>邮箱</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>密码</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="auth-button">
                {isLogin ? '登录' : '注册'}
              </button>
            </form>
            <div className="auth-switch">
              {isLogin ? '没有账号？' : '已有账号？'}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </div>
          </div>
        </div>
      )
    }
