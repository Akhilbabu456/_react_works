
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import AddCard from './components/AddCard'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<AuthPage/>}/>
        <Route exact path="/users" element={<HomePage/>}/>
        <Route exact path='/users/add' element={<AddCard />}/>
      </Routes>
      
    </>
  )
}

export default App
