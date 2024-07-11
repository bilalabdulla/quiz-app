import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Question = ({
    current,
    setCurrent,
    questions,
    options,
    correct,
    setScore,
    score,
    name,
}) => {
    const [selected, setSelected] = useState()
    const navigate = useNavigate()

    const handleSelect = (option) => {
        if (selected === option && selected === correct) {
            return 'select'
        } else if (selected === option && selected !== correct) {
            return 'wrong'
        } else if ( option === correct ){
            return 'select'
        }
    }

    const handleCheck = (option) => {
        setSelected(option)
        if ( option === correct) setScore(score + 1)
    }

    const handleNext = () => {
        if (current > 8) {
            navigate('/result', {state: {score: score, name:name}})
        } else if(selected) {
            setCurrent(current+1)
            setSelected()
        } else {

        }
    }

    const handleQuit = () => {
        navigate('/')
    }

  return (
    <div className='question'>
      <h1 className='question-head'>Question No: {current + 1}</h1>
      <div>
        <h2 className='question-name'>{questions[current]?.question}</h2>
        <div className='question-options'>
            {
                options && options.map((option) => {
                   return  <button onClick={() => {handleCheck(option)}}
                   className={`single ${selected && handleSelect(option)}`}
                   key={option}
                   disabled={selected}
                   >{option}</button>
                })
            }
        </div>
        <div className='btns'>
            <button onClick={handleQuit} className='quit-btn'>Quit</button>
            <button onClick={handleNext} className='next-btn'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Question
