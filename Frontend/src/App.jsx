import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

import AuthPage from './Pages/AuthPage'
import CreateInterView from './Pages/CreateInterview';
import useCompanyauthStore from './store/useCompanyauthStore';
import useStudentAuthStore from './store/useStudentAuthStore';
import CompanyHomePage from './Pages/CompanyHomePage';
import StudentHomePage from './Pages/StudentHomePage';

function App() {
 
  
  const { company, checkCompanyauth, isLoading } = useCompanyauthStore();
  const { student,isLoading:isCheckingAuth, checkStudentAuth } = useStudentAuthStore();

  useEffect(() => {

    checkCompanyauth();
    checkStudentAuth()
  }, [])

  if (isLoading || isCheckingAuth) return;

  return (
    <div className='min-h-screen w-screen flex-1 justify-start'>

      <Routes>
        <Route path='auth' element={!company && !student ? <AuthPage /> : <Navigate to={'/'} />} />
        {company ?<Route path='/' element={company ? <CompanyHomePage /> : <Navigate to={'/auth'} />} />:
        <Route path='/' element={student ? <StudentHomePage /> : <Navigate to={'/auth'} />} />
        }
        
        
        <Route path='/create-interview' element={company ? <CreateInterView /> : <Navigate to={'/auth'} />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
