import React, { useEffect, useState } from 'react'
    import { Routes, Route, useNavigate } from 'react-router-dom'
    import Home from './pages/Home.jsx'
    import Learning from './pages/Learning.jsx'
    import Testing from './pages/Testing.jsx'
    import Analytics from './pages/Analytics.jsx'
    import Auth from './pages/Auth.jsx'
    import Navbar from './components/Navbar.jsx'
    import axios from 'axios'

    function App() {
      const [user, setUser] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          axios.get('/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            setUser(response.data)
          })
          .catch(() => {
            localStorage.removeItem('token')
            navigate('/auth')
          })
        }
      }, [navigate])

      const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
        navigate('/auth')
      }

      return (
        <>
          <Navbar user={user} logout={logout} />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/learning" element={<Learning user={user} />} />
            <Route path="/testing" element={<Testing user={user} />} />
            <Route path="/analytics" element={<Analytics user={user} />} />
            <Route path="/auth" element={<Auth setUser={setUser} />} />
          </Routes>
        </>
      )
    }

    export default App
