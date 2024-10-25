import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

const ProfilePage = () => {
    
    return (
        <div className='grid-layout'>
            <Header />
            <LeftSideBar />
            <Box className='max-w-screen-sm main p-10'>
                <Text className='text-2xl'>Edit Account Details</Text>
                <Stack className='w-full'>
                    <Stack gap={5} >
                        <Box className='flex w-full justify-between items-center' >
                            <Text>Name</Text>
                            <Button colorScheme='blue' size={'sm'}>Save</Button>
                        </Box>
                        <Input type='text' />
                        <Box className='flex w-full justify-between items-center' >
                            <Text>Email Address</Text>
                            <Button colorScheme='blue' size={'sm'}>Change</Button>
                        </Box>
                        <Input type='password' variant={'filled'} />
                        <Box className='flex w-full justify-between items-center' >
                            <Text>Password</Text>
                            <Button colorScheme='blue' size={'sm'}>Change</Button>
                        </Box>
                        <Input type='email' variant={'filled'} />
                        <Box className='flex w-full justify-between items-center' >
                            <Text>Mobile Number</Text>
                            <Button colorScheme='blue' size={'sm'}>Change</Button>
                        </Box>
                        <Input type='tel' variant={'filled'}  />
                        <Box className='flex w-full justify-between items-center' >
                            <Text>Whatsapp Number</Text>
                            <Button colorScheme='blue' size={'sm'}>Save</Button>
                        </Box>
                        <Input type='tel'  />
                    </Stack>

                </Stack>

            </Box>
        </div>
    )
}

export default ProfilePage
