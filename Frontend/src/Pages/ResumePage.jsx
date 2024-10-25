import React, { useState } from 'react'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'
import { Avatar, Badge, Box, Button, Flex, Icon, IconButton, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { ArrowRight, Edit2, Link, LinkIcon, PackagePlusIcon, Plus } from 'lucide-react'

const ResumePage = () => {
    const [menu, setMenu] = useState('education');

    const buttonSize = useBreakpointValue(['sm', 'md'])
    return (
        <div className='grid-layout'>
            <Header />
            <LeftSideBar />
            <Stack className='main p-10 max-w-screen-xl'>
                <Box className='flex flex-col md:flex-row gap-10 w-full mt-10 bg-slate-100 p-10 rounded-lg'>
                    <Avatar name='Rakesh Manna' size={'xl'} />
                    <Box>
                        <Text>Rakesh Manna</Text>
                        <Text>Full Stack Developer</Text>
                        <Text>Neotia Instituite of Technologoy Management and Scienence <span>2024 Pass out</span></Text>
                    </Box>
                    <Box className='flex flex-col md:flex-row gap-5'>
                        <Button size={buttonSize} colorScheme='blue'>Edit</Button>
                        <Button size={buttonSize} colorScheme='blue'>Download Resume</Button>
                    </Box>

                </Box>
                <Box className='max-w-full overflow-x-scroll flex gap-10 p-5 text-nowrap '>
                    <Text onClick={() => setMenu('education')} className={`${menu === 'education' && 'border-b-2 border-blue-600 text-blue-500'} cursor-pointer ease-in-out duration-300`}>Education</Text>
                    <Text onClick={() => setMenu('projects')} className={`${menu === 'projects' && 'border-b-2 border-blue-600 text-blue-500'} cursor-pointer`}>Projects</Text>
                    <Text onClick={() => setMenu('work_experience')} className={`${menu === 'work_experience' && 'border-b-2 border-blue-600 text-blue-500'} cursor-pointer`}>Work Experience </Text>
                    <Text onClick={() => setMenu('achievements')} className={`${menu === 'achievements' && 'border-b-2 border-blue-600 text-blue-500'} cursor-pointer`}>Achievements</Text>
                    <Text onClick={() => setMenu('certiffications')} className={`${menu === 'certiffications' && 'border-b-2 border-blue-600 text-blue-500'} cursor-pointer`}>Certiffications</Text>

                </Box>


                <Stack className='w-full'>

                    {menu === 'education' &&
                        <>

                            <Stack className='w-full'>
                                <Box className='flex gap-5 items-center w-full'>

                                    <Icon fontSize={'4xl'} >
                                        <PackagePlusIcon />
                                    </Icon>
                                    <Stack gap={1} >
                                        <Text>Add Education Details</Text>
                                        <Text>Your school/college details</Text>
                                    </Stack>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Stack className='w-full mt-5 py-5 bg-slate-100 rounded-lg'>


                                <Box className='flex justify-between px-3 '>


                                    <Box className='flex flex-col  '>
                                        <Text>Maulana Abul Kalam Azad University of Technology, West Bengal</Text>
                                        <Text>B.Tech,Computer Science Engineering (CSE) | 8.9 CGPA</Text>
                                        <Text>2020-2024</Text>
                                    </Box>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} leftIcon={<Edit2 size={'15px'} />} colorScheme='blue'>
                                            New
                                        </Button>
                                    </Box>



                                </Box>



                            </Stack>
                        </>}


                    {menu === 'projects' &&
                        <>
                            <Stack className='w-full'>
                                <Box className='flex gap-5 items-center w-full'>

                                    <Icon fontSize={'4xl'} >
                                        <PackagePlusIcon />
                                    </Icon>
                                    <Stack gap={1} >
                                        <Text>Add Projext Details</Text>
                                        <Text>Projexts that you have worked on before</Text>
                                    </Stack>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Stack className='w-full mt-5 py-5 bg-slate-100 rounded-lg'>


                                <Box className='flex justify-between px-3 '>


                                    <Box className='flex flex-col  '>
                                        <Text className='text-xl pb-5 font-bold'>StackOverFlow Clone</Text>
                                        <li>
                                            To Add new features in existing stackoverflow website
                                        </li>
                                        <li>I have used react js and Node for backend</li>
                                    </Box>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} leftIcon={<Edit2 size={'15px'} />} colorScheme='blue'>
                                            New
                                        </Button>
                                    </Box>



                                </Box>
                                <Stack className='p-5' gap={3}>
                                    <Box className='flex flex-col md:flex-row  gap-5 py-5'>
                                        <Button size={buttonSize} variant={'outline'} colorScheme='blue' rightIcon={<ArrowRight />}> <a href='#' target='_blank'>View Project</a></Button>
                                        <Button size={buttonSize} colorScheme='blue' rightIcon={<Link />} >Add Link</Button>

                                    </Box>

                                    <Box className='flex gap-5 flex-wrap'>
                                        <Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag><Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag><Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag><Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag><Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag><Tag size={buttonSize} colorScheme='blue' >
                                            React
                                        </Tag>
                                    </Box>
                                </Stack>


                            </Stack>
                        </>}

                    {menu === 'work_experience' &&

                        <>
                            <Stack className='w-full'>
                                <Box className='flex gap-5 items-center w-full'>

                                    <Icon fontSize={'4xl'} >
                                        <PackagePlusIcon />
                                    </Icon>
                                    <Stack gap={1} >
                                        <Text>Add Work Experience</Text>
                                        <Text>Your previous internship / full time experiences</Text>
                                    </Stack>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Flex  className='w-full mt-5 py-5 bg-slate-100 rounded-lg  '>


                                <Stack className='w-4/6 border-r-2' >


                                    <Box className='flex justify-between px-3   '>


                                        <Stack className='  '>
                                            <Stack gap={0} >
                                                <Text className='text-xl  font-bold'>StackOverFlow Clone <Link size={'20px'} className='inline text-blue-500 ml-2 cursor-pointer' /> </Text>
                                                <Text className='text-sm font-thin'>Sept 2023 - Nov 2023 (2 months) | Part-time</Text>
                                            </Stack>

                                            <li>
                                                To Add new features in existing stackoverflow website
                                            </li>
                                            <li>I have used react js and Node for backend</li>
                                        </Stack>

                                        <Box>
                                            <Button variant={'outline'} size={buttonSize} leftIcon={<Edit2 size={'15px'} />} colorScheme='blue'>
                                                New
                                            </Button>
                                        </Box>



                                    </Box>
                                    <Stack className='p-5' gap={3}>
                                        <Box className='flex flex-col md:flex-row  gap-5 py-5'>
                                            <Button size={buttonSize} variant={'outline'} colorScheme='blue' rightIcon={<ArrowRight />}> <a href='#' target='_blank'>View Project</a></Button>
                                            <Button size={buttonSize} colorScheme='blue' rightIcon={<Link />} >Add Link</Button>

                                        </Box>

                                        <Box className='flex gap-5 flex-wrap'>
                                            <Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag><Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag><Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag><Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag><Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag><Tag size={buttonSize} colorScheme='blue' >
                                                React
                                            </Tag>
                                        </Box>
                                    </Stack>

                                </Stack>
                                <Stack className='px-5'>
                                    <Text>Team members</Text>
                                </Stack>
                            </Flex>
                        </>


                    }


                </Stack>
            </Stack>

        </div>
    )
}

export default ResumePage
