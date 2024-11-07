import { useRef, useState } from 'react'
import Header from '../../Components/Header'
import LeftSideBar from '../../Components/LeftSideBar'
import { Avatar, Box, Button, Flex, Icon, Stack, Tag, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react'
import { ArrowRight, Bird, Book, Camera, Download, Edit2, Link, PackagePlusIcon, Plus } from 'lucide-react'
import './Resume.css';
import toast from 'react-hot-toast'
const ResumePage = () => {
    const [menu, setMenu] = useState('education');
    const [image, setImage] = useState(null);

    const imageInputRef = useRef();
    const { colorMode } = useColorMode()

    const buttonSize = useBreakpointValue(['sm', 'md'])


    const handleSelectImage = (e) => {

        const maxSize = 2 * 1024 * 1024;

        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            if (file.size > maxSize) {
                return toast.error("Image size must be less than 2mb");

            }

            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                setImage(fileReader.result);
            }

            fileReader.readAsDataURL(file);
        } else {
            setImage(null);
            return toast.error("Please select a valid image file")
        }
    }

    return (
        <Box className='grid-layout'>
            <Header />
            <LeftSideBar />
            <Stack className='main p-5 md:p-10 max-w-screen-xl'>
                <Box className={` flex flex-col md:flex-row items-center gap-10 w-full mt-10 ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'}  p-10 rounded-lg`}>
                    <Box className='relative '>
                        <Avatar onClick={() => imageInputRef.current.click()} name='Rakesh Manna' src={image} size={'xl'} className='avatar' />
                        <input type="file" onChange={handleSelectImage} className='hidden' ref={imageInputRef} />

                    </Box>
                    <Box className='text-center md:text-start'>
                        <Text className='text-2xl font-extrabold'>Rakesh Manna</Text>
                        <Text className='text-xl font-normal'>Full Stack Developer</Text>
                        <Text className='font-light'>Neotia Instituite of Technologoy Management and Scienence <span>2024 Pass out</span></Text>
                    </Box>
                    <Box className='flex flex-col md:flex-row gap-5'>
                        <Button size={buttonSize} rightIcon={<Edit2 size={'18px'} />} colorScheme='blue'>Edit</Button>
                        <Button size={buttonSize} rightIcon={<Download />} colorScheme='blue'>Download Resume</Button>
                    </Box>

                </Box>
                <ul className='max-w-full overflow-x-scroll md:overflow-hidden flex gap-10 p-5 text-nowrap text-md md:text-xl font-medium '>
                    <li>
                        <Text onClick={() => setMenu('education')} className={`${menu === 'education' && ' text-blue-800 border-b-2 border-b-[#2563eb]'} menu cursor-pointer ease-in-out duration-300 `}>Education</Text>

                    </li>
                    <li>

                        <Text onClick={() => setMenu('projects')} className={`${menu === 'projects' && ' text-blue-500 border-b-2 border-b-[#2563eb]'} menu cursor-pointer`}>Projects</Text>
                    </li>
                    <li>

                        <Text onClick={() => setMenu('work_experience')} className={`${menu === 'work_experience' && ' text-blue-500 border-b-2 border-b-[#2563eb]'} menu cursor-pointer ease-in-out duration-300`}>Work Experience </Text>
                    </li>
                    <li>
                        <Text onClick={() => setMenu('achievements')} className={`${menu === 'achievements' && ' text-blue-500 border-b-2 border-b-[#2563eb]'} menu cursor-pointer ease-in-out duration-300`}>Achievements</Text>

                    </li>
                    <li>

                        <Text onClick={() => setMenu('certiffications')} className={`${menu === 'certiffications' && 'text-blue-500 border-b-2 border-b-[#2563eb]'} menu cursor-pointer ease-in-out duration-300`}>Certiffications</Text>
                    </li>

                </ul>


                <Stack className='w-full'>

                    {menu === 'education' &&
                        <>

                            <Stack className='w-full'>
                                <Box className='flex gap-3 justify-between items-center w-full'>

                                    <Box className='flex gap-3'>
                                        <Icon fontSize={'4xl'} alignSelf={'center'} >
                                            <PackagePlusIcon />
                                        </Icon>
                                        <Stack gap={1} >
                                            <Text>Add Education Details</Text>
                                            <Text>Your school/college details</Text>
                                        </Stack>
                                    </Box>


                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Stack className={`w-full mt-5 py-5 ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'} rounded-lg`}>


                                <Box className='flex justify-between px-3 '>


                                    <Box className='flex flex-col pr-1  '>
                                        <Text>Maulana Abul Kalam Azad University of Technology, West Bengal</Text>
                                        <Text>B.Tech,Computer Science Engineering (CSE) | 8.9 CGPA</Text>
                                        <Text>2020-2024</Text>
                                    </Box>

                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} leftIcon={<Edit2 size={'15px'} />} colorScheme='blue'>
                                            Edit
                                        </Button>
                                    </Box>



                                </Box>



                            </Stack>
                        </>}

                    {menu === 'projects' &&
                        <>
                            <Stack className='w-full'>
                                <Box className='flex gap-3 justify-between items-center w-full'>

                                    <Box className='flex gap-3 '>
                                        <Icon fontSize={'4xl'} alignSelf={'center'} >
                                            <PackagePlusIcon />
                                        </Icon>
                                        <Stack gap={1} >
                                            <Text>Add Projext Details</Text>
                                            <Text>Projexts that you have worked on before</Text>
                                        </Stack>
                                    </Box>



                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Stack className={`w-full mt-5 py-5 ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'} rounded-lg`}>


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
                                <Box className='flex gap-3 items-center justify-between w-full'>
                                    <Box className='flex gap-3'>
                                        <Icon fontSize={'4xl'} alignSelf={'center'} >
                                            <PackagePlusIcon />
                                        </Icon>
                                        <Stack gap={1} >
                                            <Text>Add Work Experience</Text>
                                            <Text>Your previous internship / full time experiences</Text>
                                        </Stack>
                                    </Box>


                                    <Box>
                                        <Button variant={'outline'} size={buttonSize} colorScheme='blue' leftIcon={<Plus size={'20px'} />} className='ml-auto justify-self-end' >
                                            Add new
                                        </Button>
                                    </Box>



                                </Box>
                            </Stack>

                            <Flex className={`w-full mt-5 py-5 ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'} rounded-lg`}>


                                <Stack className='w-4/6 border-r-2' >


                                    <Box className='flex justify-between px-3   '>


                                        <Stack >
                                            <Box className='flex justify-between '>
                                                <Text className='text-sm md:text-xl  font-bold'>StackOverFlow Clone <Link size={'20px'} className='inline text-blue-500 ml-2 cursor-pointer' /> </Text>
                                                <Button variant={'outline'} size={'xs'} leftIcon={<Plus size={'15px'} className='hidden md:block ' />} colorScheme='blue'>
                                                    New
                                                </Button>
                                            </Box>

                                            <Text className='text-sm font-extralight'>Sept 2023 - Nov 2023 (2 months) | Part-time</Text>


                                            <Box className='text-justify'>
                                                <li>
                                                    To Add new features in existing stackoverflow website
                                                </li>
                                                <li>I have used react js and Node for backend</li>
                                            </Box>

                                        </Stack>





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
                                <Stack gap={5} className='px-5 flex-1 '>
                                    <Box className='flex gap-2 flex-wrap justify-between w-full'>
                                        <Text className='text-sm md:text-xl text-nowrap'>Team members</Text>
                                        <Button
                                            size={'xs'}
                                            leftIcon={<Plus />}
                                            colorScheme='blue'
                                            variant={'outline'}
                                        >Add</Button>
                                    </Box>

                                    <Box className='h-full flex items-center justify-center '>

                                        <Text>
                                            <Bird className='inline mr-3 ' />
                                            No members
                                        </Text>
                                    </Box>
                                </Stack>
                            </Flex>
                        </>}

                    {menu === 'achievements' &&
                        <>
                            <Stack className='w-full '>
                                <Box className='flex items-center justify-between gap-3 w-full p-2 '>
                                    <Box className='flex gap-3'>
                                        <Icon alignSelf={'center'} fontSize={'4xl'}>
                                            <Book />

                                        </Icon>
                                        <Stack gap={1} className=' ' >
                                            <Text>Add Achievements <br />/Extracurricular Activity</Text>
                                            <Text>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</Text>
                                        </Stack>
                                    </Box>


                                    <Box >
                                        <Button
                                            variant={'outline'}
                                            colorScheme='blue'
                                            size={'xs'}
                                            leftIcon={<Plus size={'15px'} />}
                                        >
                                            Add new
                                        </Button>
                                    </Box>


                                </Box>


                                <Stack gap={2} className={`w-full rounded-md border-1  ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'} p-2`}>
                                    <Box className='flex justify-between'>
                                        <Text>Goldman Sachs virtual internship</Text>
                                        <Button
                                            colorScheme='blue'
                                            variant={'outline'}
                                            size={buttonSize}
                                            leftIcon={<Edit2 size={'15px'} />}
                                        >Edit</Button>
                                    </Box>
                                    <Box>
                                        <li>Crack leaked password database</li>
                                    </Box>
                                    <Text className='text-sm font-thin'>September 2023 |  <span className='text-blue-500 '>Certificate link</span></Text>
                                    <Box className='flex gap-2 flex-wrap py-3'>
                                        <Tag colorScheme='blue'>cryptography</Tag>
                                        <Tag colorScheme='blue'>Data Mining</Tag>
                                    </Box>
                                </Stack>


                            </Stack>
                        </>}

                    {menu === 'certiffications' &&
                        <>
                            <Stack className='w-full'>
                                <Box className='flex items-center justify-between gap-3 w-full p-2 '>
                                    <Box className='flex gap-3'>
                                        <Icon alignSelf={'center'} fontSize={'4xl'}>
                                            <Book />

                                        </Icon>
                                        <Stack className='flex-1'>
                                            <Text>Add Certificate/Course Details</Text>
                                            <Text>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</Text>
                                        </Stack>
                                    </Box>


                                    <Box>
                                        <Button
                                            variant={'outline'}
                                            colorScheme='blue'
                                            size={buttonSize}
                                            leftIcon={<Plus size={'15px'} />}
                                        >
                                            Add new
                                        </Button>
                                    </Box>


                                </Box>

                                <Stack gap={2} className={`w-full rounded-md border-1  ${colorMode === 'light' ? 'bg-slate-200' : 'bg-slate-600'} p-2`}>
                                    <Box className='flex justify-between'>
                                        <Text>Goldman Sachs virtual internship</Text>
                                        <Button
                                            colorScheme='blue'
                                            variant={'outline'}
                                            size={buttonSize}
                                            leftIcon={<Edit2 size={'15px'} />}
                                        >Edit</Button>
                                    </Box>
                                    <Box>
                                        <li>Crack leaked password database</li>
                                    </Box>
                                    <Text className='text-sm font-thin'>September 2023 |  <a href='#' className='text-blue-500 '>Certificate link <Link size={'15px'} className='inline' /></a></Text>
                                    <Box className='flex gap-2 flex-wrap py-3'>
                                        <Tag colorScheme='blue'>cryptography</Tag>
                                        <Tag colorScheme='blue'>Data Mining</Tag>
                                    </Box>
                                </Stack>
                            </Stack>
                        </>}

                </Stack>
            </Stack>

        </Box>
    )
}

export default ResumePage
