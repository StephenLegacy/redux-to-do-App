import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todo/todoSlice'
import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTask(input))
      setInput('')
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="glassmorphic-input flex-1 px-4 py-3 text-white placeholder-gray-300 focus:placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="glassmorphic-button px-4 py-3 text-white flex items-center gap-2"
        >
          <FiPlus />
          Add
        </motion.button>
      </div>
    </motion.form>
  )
}

export default AddTask