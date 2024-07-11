import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Home = () => {

    const [name, setName] = useState('')
    const navigate = useNavigate()
    const { fetchQuestions } = useContext(UserContext)

    const handleSubmit = () => {
        if(!name) {
            return null
        } else {
            fetchQuestions()
            navigate('/quiz', {state: {name:name}})
        }
    }

  return (
    <div className='home'>
        <h1 className='head-greeting'>Welcome to the Quiz</h1>
        <div className='input-div'>
        <h4>Enter your name</h4>
        <input className='home-input' value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='home-select-div'>
            <h4>Select Difficulty</h4>
        <select className='home-select'>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>
        </div>
      <button onClick={handleSubmit} className='home-btn'>
        Start the quiz
      </button>
    </div>
  )
}

export default Home
