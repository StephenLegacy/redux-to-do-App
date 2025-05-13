import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/todo/todoSlice'
import Task from './Task'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFilter } from 'react-icons/fi'

const ListTask = () => {
  const { tasks, filter } = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'done') return task.isDone
    if (filter === 'notDone') return !task.isDone
    return true
  })

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glassmorphic p-6 rounded-xl"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Your Tasks</h2>
        <div className="relative">
          <select
            onChange={(e) => dispatch(setFilter(e.target.value))}
            value={filter}
            className="glassmorphic-input appearance-none px-4 py-2 pr-8 text-white rounded-lg"
          >
            <option value="all">All</option>
            <option value="done">Completed</option>
            <option value="notDone">Pending</option>
          </select>
          <FiFilter className="absolute right-3 top-2.5 text-white pointer-events-none" />
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white py-4"
            >
              No tasks found. Add some!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ListTask