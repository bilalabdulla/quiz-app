import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebase";

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [name, setName] = useState('bilal')
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)

    const [quizListDb, setQuizListDb] = useState([])

    const questionDbRef = collection(db, 'questions')

    const fetchQuestions = async () => {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
        setQuestions(data.results)
    }

    const fetchDbQuestions = async () => {
    try {
        const data = await getDocs(questionDbRef)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setQuizListDb(filteredData)
        console.log('hehe', quizListDb)
    } catch (err) {
        console.error(err)
    }
    }
    
    return (
        <UserContext.Provider value={{ name, fetchQuestions, score, setScore, questions, setQuestions, fetchDbQuestions, quizListDb }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider