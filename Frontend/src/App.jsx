import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import CreateInterView from './Pages/CreateInterview';
import useCompanyauthStore from './store/useCompanyauthStore';

function App() {

  const { company, checkCompanyauth, isLoading } = useCompanyauthStore();

  useEffect(() => {

    checkCompanyauth();
  }, [])

  if (isLoading) return;

  return (
    <div className='min-h-screen w-screen flex-1 justify-start'>
      
      <Routes>
        <Route path='auth' element={!company ? <AuthPage /> : <Navigate to={'/'} />} />
        <Route path='/' element={company ? <HomePage /> : <Navigate to={'/auth'} />} />
        <Route path='/create-interview' element={company ? <CreateInterView /> : <Navigate to={'/auth'} />} />
      </Routes>
      <Toaster position='bottom-left' />
    </div>
  )
}

export default App
