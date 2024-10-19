
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import PostJob from './Pages/PostJob'

function App() {


  return (
    <div className='min-h-screen w-screen flex-1 justify-start'>
      
      <Routes>
        <Route path='auth' element={<AuthPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/post-job' element={<PostJob/>} />
      </Routes>
     
    </div>
  )
}

export default App
