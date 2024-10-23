import { Box, Button, FormControl, FormLabel, Image, Input, Stack, Switch } from '@chakra-ui/react'
import { Lock, Mail, Phone, User } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const StudentForm = () => {
    const [isLogin, setIslogin] = useState(true);

    const [authData, setAuthData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        isWhatsapp: false,



    })
    const userId = null;
    const isLoading = false;
    const handleSignup = () => {
        if (!authData.name || !authData.phone || !authData.companyEmail || !authData.companyName || !authData.employeeSize) {
            return toast.error("Please fill all fields")
        }
        signup(authData);
    }
    const handleLogin = () => {

    }
    console.log(authData)
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
                            <User src='/Person icon.png' className='absolute top-2 left-2 w-5 ' />
                        </Box>
                        <Box className='relative'>
                            <Input type='email' placeholder='Enter Email' className=' border-[2px] border-[#535353]  ' paddingLeft={8}
                                onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                            />
                            <Mail src='/mail.png' className='absolute top-2 left-2 w-5 ' />
                        </Box>
                        <Box className='relative'>
                            <Input type='password' placeholder='Enter Password' className=' border-[2px] border-[#535353]  ' paddingLeft={8}
                                onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                            />
                            <Lock src='/Vector.png' className='absolute top-2 left-2 w-5 ' />
                        </Box>


                        <Box className='relative  '>
                            <FormControl display='flex' alignItems='center' className='justify-end pr-4 pb-2'>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    Whatsapp
                                </FormLabel>
                                <Switch id='email-alerts' value={authData.isWhatsapp} onChange={(e) => setAuthData({ ...authData, isWhatsapp: !authData.isWhatsapp })} />
                            </FormControl>
                            <Input type='tel' placeholder='Phone no' className=' border-[2px] border-[#535353]  ' paddingLeft={8}
                                onChange={(e) => setAuthData({ ...authData, phone: e.target.value })}
                            />
                            <Phone src='/mail.png' className='absolute top-10 left-2  w-5 ' />
                        </Box>


                        <Box className=' w-full text-wrap text-center  '>
                            <p>By clicking on proceed you wil accept our <br /> <span className='text-blue-500'>Terms & Conditions</span> </p>
                        </Box>
                    </>}

                {
                    isLogin && !userId && <>
                        <Box className='relative'>
                            <Input type='email' placeholder='Email address'
                                value={authData.email}
                                onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                                className=' border-[2px] border-[#535353] ' paddingLeft={8} size={'lg'} />
                            <Image src='/Person icon.png' className='absolute top-3 left-2 w-4' />



                        </Box>
                        <Box className='relative'>
                            <Input type='password' placeholder='*****'
                                value={authData.password}
                                onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                                className=' border-[2px] border-[#535353] ' paddingLeft={8} size={'lg'} />
                            <Lock className='absolute top-3 left-2 w-5' />



                        </Box>

                        <Button

                            onClick={handleLogin}
                            isLoading={isLoading}
                            colorScheme='blue'
                        >Login </Button>

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

export default StudentForm
