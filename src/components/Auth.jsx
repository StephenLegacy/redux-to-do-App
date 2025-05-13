import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, guestLogin } from '../features/auth/authSlice'
import { motion } from 'framer-motion'
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi'

const Auth = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate here
    dispatch(login({ email: credentials.email }))
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glassmorphic p-8 rounded-xl max-w-md w-full mx-4"
    >
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back</h1>
      
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-white flex items-center gap-2">
            <FiUser />
            Email
          </label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            className="glassmorphic-input w-full px-4 py-3 text-white"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-white flex items-center gap-2">
            <FiLock />
            Password
          </label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className="glassmorphic-input w-full px-4 py-3 text-white"
            placeholder="••••••••"
            required
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="glassmorphic-button w-full py-3 text-white flex items-center justify-center gap-2"
        >
          <FiLogIn />
          Login
        </motion.button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-white border-opacity-20">
        <p className="text-white text-center mb-4">Or continue as</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => dispatch(guestLogin())}
          className="glassmorphic-button w-full py-3 text-white"
        >
          Guest User
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Auth