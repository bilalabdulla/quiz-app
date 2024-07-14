import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Home from './components/Home';
import { useState } from 'react';
import UserContextProvider from './contexts/UserContext';
import Result from './components/Result';
import { Auth } from './components/Auth';
import { QuizList } from './components/QuizList';
import { NewQuiz } from './components/NewQuiz';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/quizlist' element={<QuizList />} />
        <Route path='/newquiz' element={<NewQuiz />} />
    </Route>
  )
)

function App() {

  return (
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
