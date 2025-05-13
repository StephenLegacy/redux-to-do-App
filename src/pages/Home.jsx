import React from 'react'
import AddTask from '../components/AddTask'
import ListTask from '../components/ListTask'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <AddTask />
        <ListTask />
      </motion.div>
    </div>
  )
}

export default Home