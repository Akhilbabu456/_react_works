
import {  Route, Routes } from 'react-router-dom'
import './App.css'

import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import AddCard from './components/AddCard'
import UpdateCard from './components/UpdateCard'



function App() {
 

  return (
    <>
      <Routes>
        <Route exact path='/' element={<AuthPage/>}/>
        <Route exact path="/users" element={<HomePage/>}/>
        <Route exact path='/users/add' element={<AddCard />}/>
        <Route exact path='/users/edit/:id' element={<UpdateCard />}/>
      </Routes>
      
    </>
  )
}

export default App
