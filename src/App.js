import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Home from './components/Home';
import { useState } from 'react';
import UserContextProvider from './contexts/UserContext';
import Result from './components/Result';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
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
