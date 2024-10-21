import React, { useState } from 'react'
import Header from '../Components/Header'
import { Box, Button, HStack, Image, Input, PinInput, PinInputField, Stack } from '@chakra-ui/react';
import useAuthStore from '../store/useAuthStore';
import toast from 'react-hot-toast';


const AuthPage = () => {

  const [isLogin, setIslogin] = useState(true);

  const {signup, sendOtp, verifyOtp, userId, isLoading } = useAuthStore();



  const [authData, setAuthData] = useState({
    name: "",
    phone: "",
    companyEmail: "",
    companyName: "",
    employeeSize: "",
    otp: "",


  })

  const handleSignup = () => {
    if (!authData.name || !authData.phone || !authData.companyEmail || !authData.companyName || !authData.employeeSize) {
      return toast.error("Please fill all fields")
    }
    signup(authData);
  }

  const handleSendOtp = () => {
    if (!authData.companyEmail) {
      return toast.error("Please enter email to send otp")
    }
    sendOtp(authData.companyEmail);
  }

  const handleVerifyOtp = () => {
    if (!authData.otp) return toast.error("Please enter otp to verify")

    verifyOtp(authData.otp);
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
                    <Input type='text' placeholder='Name' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12}
                      onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                    />
                    <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input  type='tel' placeholder='Phone no.' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12}
                      onChange={(e) => setAuthData({ ...authData, phone: e.target.value })}
                    />
                    <Image src='/Vector.png' className='absolute top-4 left-4 w-[19.89px] h-[19.93px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Company Name' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12}
                      onChange={(e) => setAuthData({ ...authData, companyName: e.target.value })}
                    />
                    <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px] ' />
                  </Box>


                  <Box className='relative'>
                    <Input type='email' placeholder='Company Email' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12}
                      onChange={(e) => setAuthData({ ...authData, companyEmail: e.target.value })}
                    />
                    <Image src='/mail.png' className='absolute top-4 left-4 w-[20px] h-[18px] ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Employee Size' className=' border-[2px] border-[#535353]  ' height={'59px'} paddingLeft={12}
                      onChange={(e) => setAuthData({ ...authData, employeeSize: e.target.value })}
                    />
                    <Image src='/groups.png' className='absolute top-4 left-4 w-[32px] h-[18px] ' />
                  </Box>

                  <Box className='h-[42px] w-full text-wrap text-center '>
                    <p>By clicking on proceed you wil accept our <br /> <span className='text-blue-500'>Terms & Conditions</span> </p>
                  </Box>
                </>}

              {
                isLogin && !userId && <>
                  <Box className='relative'>
                    <Input type='email' placeholder='Email address'
                      value={authData.email}
                      onChange={(e) => setAuthData({ ...authData, companyEmail: e.target.value })}
                      className=' border-[2px] border-[#535353] ' height={'59px'} paddingLeft={12} />
                    <Image src='/Person icon.png' className='absolute top-4 left-4 w-[16px] h-[18px]' />



                  </Box>

                  <Button

                    onClick={handleSendOtp}
                    isLoading={isLoading}
                    colorScheme='blue'
                  >Send Otp </Button>

                  <p>Don't have an account? <span className='cursor-pointer' onClick={() => setIslogin(!isLogin)}>SignUp</span></p>
                </>
              }

              {isLogin && userId && <>
                <Box className='flex justify-center pt-4'>

                  <HStack >
                    <PinInput otp>
                      <PinInputField onChange={(e) => setAuthData({ ...authData, otp: authData.otp + e.target.value })} />
                      <PinInputField onChange={(e) => setAuthData({ ...authData, otp: authData.otp + e.target.value })} />
                      <PinInputField onChange={(e) => setAuthData({ ...authData, otp: authData.otp + e.target.value })} />
                      <PinInputField onChange={(e) => setAuthData({ ...authData, otp: authData.otp + e.target.value })} />
                      <PinInputField onChange={(e) => setAuthData({ ...authData, otp: authData.otp + e.target.value })} />
                    </PinInput>
                  </HStack>


                </Box>

                <Button

                  onClick={handleVerifyOtp}
                  isLoading={isLoading}
                  colorScheme='blue'
                >Verify Otp </Button>

                <p>Don't have an account? <span className='cursor-pointer' onClick={() => setIslogin(!isLogin)}>SignUp</span></p>
              </>


              }



              {!isLogin && <> <Button
                colorScheme='blue'
                onClick={handleSignup}
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
