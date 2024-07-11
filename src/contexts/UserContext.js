import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [name, setName] = useState('bilal')
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)

    const fetchQuestions = async () => {

        const { data } = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
        setQuestions(data.results)
    }
    
    return (
        <UserContext.Provider value={{ name, fetchQuestions, score, setScore, questions, setQuestions  }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider