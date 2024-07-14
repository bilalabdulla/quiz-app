import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { db } from "../config/firebase"
import { UserContext } from "../contexts/UserContext"
import Question from "./Question"
import { useLocation } from "react-router-dom"


export const QuizList = () => {
    const [quizList, setQuizList] = useState([])

    const {
        name, score, setScore, quizListDb, setQuizListDb
    } = useContext(UserContext)

    const location = useLocation()

    const [options, setOptions] = useState()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        setOptions(
            quizListDb && 
            handleShuffle([
                quizListDb[current]?.optionOne, 
                quizListDb[current]?.optionTwo,
                quizListDb[current]?.optionThree,
                quizListDb[current]?.correctAnswer
            ])
        )
    }, [quizListDb, current])

    console.log(quizListDb, 'lessgooo')

    // useEffect(() => {
    //     const getQuestionsList = async () => {
    //         try {
    //             const data = await getDocs(questionsListRef)
    //             const filteredData = data.docs.map((doc) => ({
    //                 ...doc.data(),
    //                 id: doc.id,
    //             }))
    //             setQuizList(filteredData)
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     }

    //     getQuestionsList()
        
    // }, [])

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5)
    }

    if (current === 0) {
        setScore(0)
    }

    const deleteQuestion = async (id) => {
        const questionDoc = doc(db, 'questions', id)
        await deleteDoc(questionDoc)
    }

  return (
    <div className="quiz">
        <h4 className="quiz-greeting">Hey, {location.state.name}</h4>
      {/* <div>
        {
            quizList.map((quiz) => {
                return <div>
                    <h1>{quiz.question}</h1>
                    <p>{quiz.optionOne}</p>
                    <p>{quiz.optionTwo}</p>
                    <p>{quiz.optionThree}</p>
                    <p>{quiz.correctAnswer}</p>
                </div>
            })
        }
      </div> */}
        {
            quizListDb && <>
                <p className="quiz-score">Your current score is {score}</p>
                <Question 
                current={current}
                setCurrent={setCurrent}
                questions={quizListDb}
                options={options}
                correct={quizListDb[current]?.correctAnswer}
                score={score}
                setScore={setScore}
                name={location.state.name}
                />
            </>
        }
    </div>
  )
}
