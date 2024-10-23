import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import CompanyForm from '../Components/CompanyForm';
import useCompanyauthStore from '../store/useCompanyauthStore';
import StudentForm from '../Components/StudentForm';
import LeftSideBar from '../Components/LeftSideBar';


const AuthPage = () => {
  const [isOpen,setOpen] = useState(false);
  const {companyId} = useCompanyauthStore();
  const [loginType, setLoginType] = useState();

  useEffect(() => {
    companyId ? setLoginType("company") : setLoginType("student")
  }, [companyId])




  return (

    <Box className='flex flex-col   container w-screen min-h-screen' >
      <Header isOpen={isOpen} setOpen={setOpen}  />
      <LeftSideBar isOpen={isOpen} />
      <Box className='self-end p-4 space-x-3'>
        <Tabs variant='soft-rounded' colorScheme='blue' index={loginType==="student"?0:1}>
          <TabList>
            <Tab onClick={() => setLoginType("student")} >Student</Tab>
            <Tab onClick={() => setLoginType("company")} >Company</Tab>
          </TabList>
        </Tabs>
      </Box>

      <Box className='flex h-screen w-full mt-20  justify-center gap-10 '>



        <Box className='hidden md:flex    sm:text-xs w-2/5 p-12  '>

          <Box className='text-start mt-20  leading-[28.95px] text-lg text-balance  font-medium text-[#292929B2]  flex  '>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

          </Box>

        </Box>


        <Box className='flex-1 max-w-lg '>

          {loginType === "company" ? (
            <CompanyForm loginType={loginType} />
          ) : (
            <StudentForm />
          )}

        </Box>
      </Box>
    </Box>
  )
}

export default AuthPage
