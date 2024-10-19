import { Avatar, Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Textarea } from '@chakra-ui/react'
import LeftSideBar from '../Components/LeftSideBar'
import Header from '../Components/Header'

const PostJob = () => {
    return (

        <Box className='grid-layout'>
            <Header isHome={true} />
            <LeftSideBar />
            <Box className='w-screen h-screen'>

                <FormControl >
                    <Stack className='w-[836px] p-10  '>
                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Job Title
                            </FormLabel>
                            <Input type='text' placeholder='Enter Job Title' />
                        </Box>



                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Job Description
                            </FormLabel>
                            <Textarea rows={10} type='text' placeholder='Enter Job Description' />
                        </Box>


                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Experience Level
                            </FormLabel>
                            <Select placeholder='Select Experience Level'>
                                <option value='1'> 1</option>
                                <option value='2'> 2</option>
                                <option value='3'> 3</option>
                            </Select>
                        </Box>

                        <Box className='relative flex text-nowrap items-center gap-5 '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Add Candidate
                            </FormLabel>

                            <Input size={'lg'} />
                            <HStack spacing={4} className='absolute left-40' >

                                <Tag
                                    size={"lg"}

                                    borderRadius='full'
                                    variant='outline'
                                    colorScheme='gray'
                                >
                                    <TagLabel> <Avatar size={'xs'} />  xyz@gmail.com</TagLabel>
                                    <TagCloseButton className='cursor-pointer' />
                                </Tag>

                            </HStack>
                        </Box>




                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                End Date
                            </FormLabel>
                            <Input placeholder='Select a Date' type='date' />
                        </Box>

                        <Box className='flex justify-end'>
                            <Button
                                colorScheme='blue'
                                paddingInline={10}
                            >Send</Button>

                        </Box>

                    </Stack>
                </FormControl>




            </Box>


        </Box>


    )
}

export default PostJob
