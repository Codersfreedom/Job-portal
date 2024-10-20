
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast';

import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import PostJob from './Pages/PostJob'
import useAuthStore from './store/useAuthStore'

function App() {

const {user} = useAuthStore();

  return (
    <div className='min-h-screen w-screen flex-1 justify-start'>
      
      <Routes>
        <Route path='auth' element={!user ?  <AuthPage/>:<Navigate to={'/'}/>} />
        <Route path='/' element={user ? <HomePage/>:<Navigate to={'/auth'} />} />
        <Route path='/post-job' element={user ? <PostJob/> : <Navigate to={'/auth'} />}  />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
