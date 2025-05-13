import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../features/todo/todoSlice'
import { motion } from 'framer-motion'
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.description)

  const handleEdit = () => {
    if (editValue.trim()) {
      dispatch(editTask({ id: task.id, description: editValue }))
      setIsEditing(false)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className={`glassmorphic p-4 rounded-lg flex items-center justify-between ${task.isDone ? 'opacity-70' : ''}`}
    >
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="w-5 h-5 rounded bg-transparent border-2 border-white focus:ring-0 focus:ring-offset-0 mr-3"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            className="glassmorphic-input flex-1 px-3 py-1 text-white mr-2"
            autoFocus
          />
        ) : (
          <span className={`text-white ${task.isDone ? 'line-through' : ''}`}>
            {task.description}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleEdit}
              className="p-1 text-green-400 hover:text-green-300"
            >
              <FiCheck size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsEditing(false)}
              className="p-1 text-red-400 hover:text-red-300"
            >
              <FiX size={18} />
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsEditing(true)}
              disabled={task.isDone}
              className={`p-1 ${task.isDone ? 'text-gray-400' : 'text-blue-400 hover:text-blue-300'}`}
            >
              <FiEdit2 size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(deleteTask(task.id))}
              className="p-1 text-red-400 hover:text-red-300"
            >
              <FiTrash2 size={18} />
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default Task