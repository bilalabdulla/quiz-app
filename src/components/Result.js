import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = ({ }) => {
    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        if(!location.state.name) {
            navigate('/')
        }
    }, [location.state.name, location])


  return (
    <div className='result'>
     <h1 className='result-head'>Your result is: {location.state.score} </h1>
     <p className='retry'>
        Do you wanna give it another try?
     </p>
     <button className='restart-btn' onClick={() => navigate('/')}>Restart Quiz</button>
    </div>
  )
}

export default Result
