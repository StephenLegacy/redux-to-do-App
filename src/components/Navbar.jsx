import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { motion } from 'framer-motion'
import { FiLogOut, FiUser } from 'react-icons/fi'

const Navbar = () => {
  const { user, isGuest } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <nav className="glassmorphic p-4 rounded-xl mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white"
        >
          GlassTask
        </motion.h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <FiUser />
            <span>{user ? user.email : isGuest ? 'Guest' : 'Not logged in'}</span>
          </div>
          
          {(user || isGuest) && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(logout())}
              className="glassmorphic-button px-4 py-2 text-white flex items-center gap-2"
            >
              <FiLogOut />
              Logout
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar