import React, { useState } from 'react'
import Header from '../Components/Header'
import { Box, Button, Image, Input, Stack } from '@chakra-ui/react';
import useAuthStore from '../store/useAuthStore';


const AuthPage = () => {

  const [isLogin, setIslogin] = useState(true);

  const { sendOtp, userId, isLoading } = useAuthStore();


  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    otp: "",


  })

  const handleSendOtp = () => {
    if (!authData.email) {
      return alert("Enter Email to contine")
    }
    sendOtp(authData.email);
  }


  return (

    <Box className='grid-layout ' >
      <Header />

      <Box className='flex min-h-screen items-center main '>



        <Box className='flex justify-center items-center sm:text-xs min-h-full  '>

          <Box className='text-start w-[622px] h-[116px] leading-[28.95px] text-[22.24px] font-medium text-[#292929B2]  flex text-wrap '>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

          </Box>

        </Box>
        <Box className='rightside w-[619px] '>

          <Stack className=' rounded-[15px]   p-12 w-full h-[722px] text-center  '>
            <Box>
              <h2>{!isLogin ? "Sign Up" : "Login"}</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </Box>


            <Stack gap={7}>

              {!isLogin &&

                <>
                  <Box className='relative'>
                    <Input type='text' placeholder='Name' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12} />
                    <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='tel' placeholder='Phone no.' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12} />
                    <Image src='/Vector.png' className='absolute top-4 left-4 w-[19.89px] h-[19.93px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Company Name' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12} />
                    <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px] ' />
                  </Box>


                  <Box className='relative'>
                    <Input type='email' placeholder='Company Email' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12} />
                    <Image src='/mail.png' className='absolute top-4 left-4 w-[20px] h-[18px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Employee Size' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12} />
                    <Image src='/groups.png' className='absolute top-4 left-4 w-[32px] h-[18px] ' />
                  </Box>

                  <Box className='h-[42px] w-full text-wrap text-center '>
                    <p>By clicking on proceed you wil accept our <br /> <span className='text-blue-500'>Terms & Conditions</span> </p>
                  </Box>
                </>}

              {
                isLogin && <>
                  <Box className='relative'>
                    <Input type={userId ? 'number' : 'email'} placeholder={!userId ? 'Email Address' : 'Enter otp'}
                      value={!userId ? authData.email : authData.otp}
                      onChange={(e) => !userId ? setAuthData({ ...authData, email: e.target.value }) : setAuthData({ ...authData, otp: e.target.value })}
                      className=' border-[2px] border-[#535353] ' height={'59px'} paddingLeft={12} />
                    {!userId ? <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px]' /> : <Image src='/Vector.png' className='absolute top-4 left-4 w-[16px] h-[18px]' />
                    }
                  </Box>


                  <Button

                    onClick={handleSendOtp}
                    isLoading={isLoading}
                    bg={'#0B66EF'}
                    color={'#FFF'}
                    _active={'#0B22EF'}
                    _hover={'teal'}
                  >{!userId ? 'Send Otp' : 'Verify Otp'}</Button>

                  <p>Don't have an account? <span className='cursor-pointer' onClick={() => setIslogin(!isLogin)}>SignUp</span></p>
                </>
              }

              {!isLogin && <> <Button
                bg={'#0B66EF'}
                color={'#FFF'}
                _active={'#0B22EF'}
                _hover={'teal'}
              >Proceed</Button>
                <p>Already have an account? <span className='cursor-pointer' onClick={() => setIslogin(!isLogin)}>Login</span></p></>}
            </Stack>

          </Stack>

        </Box>
      </Box>
    </Box>
  )
}

export default AuthPage
