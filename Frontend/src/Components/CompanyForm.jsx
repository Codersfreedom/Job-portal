import { Box, Button, HStack, Image, Input, PinInput, PinInputField, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import  { useState } from 'react'
import useCompanyauthStore from '../store/useCompanyauthStore';
import toast from 'react-hot-toast';

const CompanyForm = ({loginType}) => {

    const [isLogin, setIslogin] = useState(true);
    const { signup, sendOtp, verifyOtp, companyId, isLoading } = useCompanyauthStore();
  
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
  
    const handleSendOtp = (e) => {
        e.stopPropagation();
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
    <Stack className=' rounded-[15px]   p-12 w-full  text-center  '>
            <Box className='pb-5'>
              <h2 className='text-xl font-bold '>{!isLogin ? "Sign Up" : "Login"}</h2>
              <p className='text-lg font-semibold'>{isLogin ? 'Login to your account' : 'Create an account'}</p>
            </Box>


            <Stack gap={7}>

              {!isLogin &&

                <>
                  <Box className='relative'>
                    <Input type='text' placeholder='Name' className=' border-[2px] border-[#535353]  ' paddingLeft={7}
                      onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                    />
                    <Image src='/Person icon.png' className='absolute top-3 left-2 w-4 ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='tel' placeholder='Phone no.' className=' border-[2px] border-[#535353]  ' paddingLeft={7}
                      onChange={(e) => setAuthData({ ...authData, phone: e.target.value })}
                    />
                    <Image src='/Vector.png' className='absolute top-3 left-2 w-4 ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Company Name' className=' border-[2px] border-[#535353]  ' paddingLeft={7}
                      onChange={(e) => setAuthData({ ...authData, companyName: e.target.value })}
                    />
                    <Image src='/Person icon.png' className='absolute top-3 left-2 w-4 ' />
                  </Box>


                  <Box className='relative'>
                    <Input type='email' placeholder='Company Email' className=' border-[2px] border-[#535353]  ' paddingLeft={8}
                      onChange={(e) => setAuthData({ ...authData, companyEmail: e.target.value })}
                    />
                    <Image src='/mail.png' className='absolute top-3 left-2  w-5 ' />
                  </Box>
                  <Box className='relative'>
                    <Input type='text' placeholder='Employee Size' className=' border-[2px] border-[#535353]  ' paddingLeft={9}
                      onChange={(e) => setAuthData({ ...authData, employeeSize: e.target.value })}
                    />
                    <Image src='/groups.png' className='absolute top-4 left-2  w-6 ' />
                  </Box>

                  <Box className=' w-full text-wrap text-center  '>
                    <p>By clicking on proceed you wil accept our <br /> <span className='text-blue-500'>Terms & Conditions</span> </p>
                  </Box>
                </>}

              {
                isLogin && !companyId && <>
                  <Box className='relative'>
                    <Input type='email' placeholder='Email address'
                      value={authData.email}
                      onChange={(e) => setAuthData({ ...authData, companyEmail: e.target.value })}
                      className=' border-[2px] border-[#535353] ' paddingLeft={8} size={'lg'} />
                    <Image src='/Person icon.png' className='absolute top-3 left-2 w-4' />



                  </Box>

                  <Button

                    onClick={handleSendOtp}
                    isLoading={isLoading}
                    colorScheme='blue'
                  >Send Otp </Button>

                  <p>Don't have an account? <span className='cursor-pointer' onClick={() => setIslogin(!isLogin)}>SignUp</span></p>
                </>
              }

              {isLogin && companyId && <>
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
  )
}

export default CompanyForm
