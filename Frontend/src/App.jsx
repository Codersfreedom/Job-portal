import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import CreateInterView from './Pages/CreateInterview';
import useAuthStore from './store/useAuthStore'

function App() {

  const { user, checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    
    checkAuth();
  }, [])

  if (isLoading) return;

  return (
    <div className='min-h-screen w-screen flex-1 justify-start'>

      <Routes>
        <Route path='auth' element={!user ? <AuthPage /> : <Navigate to={'/'} />} />
        <Route path='/' element={user ? <HomePage /> : <Navigate to={'/auth'} />} />
        <Route path='/create-interview' element={user ? <CreateInterView /> : <Navigate to={'/auth'} />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
