import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Question from './Question';
import { useLocation } from 'react-router-dom';

const Quiz = () => {

    const { name, score, setScore, questions, setQuestions} = useContext(UserContext);
    const location = useLocation()

    const [options, setOptions] = useState();
    const [ current, setCurrent] = useState(0);

    const incorrectAnswers = questions[current]?.incorrect_answers

    const incorrectlist = []

    if (incorrectAnswers != undefined) {
        incorrectAnswers.map((answer) => {
            incorrectlist.push(answer)    
        })
    }

    useEffect(() => {
        setOptions(
            questions && 
            handleShuffle([
                questions[current]?.correct_answer, ...incorrectlist
            ])
        )
    }, [questions, current]);

    
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5)
    };

    if (current === 0) {
        setScore(0)
    }



  return (
    <div className='quiz'>
     <h4 className='quiz-greeting'>Hey, {location.state.name}</h4>
     {
        questions && <>
            <p className='quiz-score'>Your current score is: {score}</p>
            <Question 
            current = {current}
            setCurrent = {setCurrent}
            questions = {questions}
            options = {options}
            correct = {questions[current]?.correct_answer}
            score = {score}
            setScore = {setScore}
            setQuestions = { setQuestions }
            name = {location.state.name}
            />
        </>
     }
    </div>
  );
};

export default Quiz;
