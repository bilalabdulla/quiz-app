import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { auth } from '../config/firebase'

const Home = () => {

    const [name, setName] = useState('')
    const navigate = useNavigate()
    const { fetchQuestions, fetchDbQuestions } = useContext(UserContext)

    const handleSubmit = () => {
        if(!name) {
            alert('enter your name')
            return null
        } else {
            fetchQuestions()
            navigate('/quiz', {state: {name:name}})
        }
    }

    const secondSubmit = () => {
      if(!name) {
        alert('enter your name')
        return null
      } else {
        fetchDbQuestions()
        navigate('/quizlist', {state: {name: name}})
      }
    }

    const loginPage = () => {
      navigate('/auth')
    }

    const directToQuiz = () => {
      navigate('/newquiz')
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
        Database Quiz
      </button>
      <button onClick={secondSubmit} className='home-btn'>
        User Quiz
      </button>
      <button onClick={auth?.currentUser ? directToQuiz : loginPage} className='home-btn'>Create quiz</button>
    </div>
  )
}

export default Home
