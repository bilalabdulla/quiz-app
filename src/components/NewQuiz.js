import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { auth, db } from "../config/firebase"
import { Navbar } from "../Navbar"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"


export const NewQuiz = () => {

    const [question, setQuestion] = useState('')
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [optionThree, setOptionThree] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')

    const navigate = useNavigate()

    const questionsListRef = collection(db, 'questions')

    const onSubmitQuestion = async () => {
        try {
            await addDoc(questionsListRef, {
                question: question,
                optionOne: optionOne,
                optionTwo: optionTwo,
                optionThree: optionThree,
                correctAnswer: correctAnswer
            })
            alert('question submitted')
            setQuestion('')
            setOptionOne('')
            setOptionTwo('')
            setOptionThree('')
            setCorrectAnswer('')
        } catch (err) {
            console.error(err)
        }
    }

    const goHome = () => {
        navigate('/')
    }
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div className="new-quiz">
      <div className="new-quiz-div">
        <textarea  className="question-input"
        value={question}
        placeholder="your question..." required
        onChange={(e) => setQuestion(e.target.value)} />
        <input className="options-input" required
        placeholder="option one" value={optionOne}
        onChange={(e) => setOptionOne(e.target.value)} />
        <input className="options-input" required
        placeholder="option two" value={optionTwo}
        onChange={(e) => setOptionTwo(e.target.value)} />
        <input className="options-input" required
        placeholder="option three" value={optionThree}
        onChange={(e) => setOptionThree(e.target.value)} />
        <input className="options-input correct-answer"
        placeholder="correct answer" required value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)} />
        <button className="new-quiz-btn" 
        onClick={onSubmitQuestion}>Submit question</button>
      </div>
      <div className="end-btns">
        <button className="logout-btn"
        onClick={logOut}>Log out</button>
        <button className="go-home-btn"
        onClick={goHome}
        >Go home</button>
      </div>
    </div>
  )
}

