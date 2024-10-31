import { Avatar, Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Textarea } from '@chakra-ui/react'
import LeftSideBar from '../../Components/LeftSideBar'
import Header from '../../Components/Header'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useJobStore from '../../store/company/useJobStore'


const PostJob = () => {
    const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        jobType: "",
        offer: {
            low: 0,
            high: 0,
        },
        openings: 0,
        startDate: "",
        endDate: "",
        location: "",
        experience: {
            low: 0,
            high: 0,
        },
        skills: [],
        about: "",
    })

    const handleAddSkill = (e) => {
        if (e.key == 'Enter' && inputValue.trim() !== "") {
            e.preventDefault();
            setFormData((prevState) => ({
                ...prevState,
                skills: [...prevState.skills, inputValue]
            }))

            setInputValue("");
        }
    }

    const handleRemoveCandidate = (skill) => {
        if (formData.skills.length > 0) {
            setFormData((prevState) => ({
                ...prevState,
                skills: prevState.skills.filter((item) => item !== skill)
            }))
        }
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const { isLoading, postJob } = useJobStore();
    console.log(formData)
    const handlePostJob = () => {
        if (!formData.title || !formData.jobType || !formData.openings || !formData.experience || !formData.skills.length > 0 || !formData.endDate) {
            return toast.error("Please enter all fields");
        }
        postJob(formData);
        setFormData({
            title: "",
            jobType: "",
            offer: {
                low: 0,
                high: 0,
            },
            openings: 0,
            startDate: "",
            endDate: "",
            location: "",
            experience: {
                low: 0,
                high: 0,
            },
            skills: [],
            about: "",
        })
    }


    return (

        <Box className='grid-layout '>
            <Header />
            <LeftSideBar />
            <Box className='main  min-h-screen max-w-screen p-5 md:p-10'>

                <FormControl className='max-w-screen-md' >
                    <Stack className='w-full px-5  '>
                        <Box className='flex flex-col items-start  w-full text-nowrap'>
                            <FormLabel className=''>
                                Job Title
                            </FormLabel>
                            <Input type='text' value={formData.title} placeholder='Enter Job Title'
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </Box>



                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                About Job
                            </FormLabel>
                            <Textarea rows={10} value={formData.about} placeholder='Enter Job Description'
                                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                            />
                        </Box>
                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Job Type
                            </FormLabel>
                            <Select value={formData.jobType} placeholder='Select Job type' onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}>
                                <option value='Work from home'>Work from home </option>
                                <option value='In office'> In office</option>
                                <option value='Hybrid'> Hybrid</option>
                            </Select>
                        </Box>

                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Offer
                            </FormLabel>
                            <Box className='flex gap-5'>

                                <Input type='number' value={formData.offer.low} onChange={(e) => setFormData({ ...formData, offer: { ...formData.offer, low: e.target.value } })} placeholder='Enter lower amount' />
                                <Input type='number' value={formData.offer.high} onChange={(e) => setFormData({ ...formData, offer: { ...formData.offer, high: e.target.value } })} placeholder='Enter higher amount' />
                            </Box>

                        </Box>
                        <Box className='flex flex-col items-start  w-full text-nowrap'>
                            <FormLabel className=''>
                                Openings
                            </FormLabel>
                            <Input type='text' value={formData.openings} placeholder='Number of openings'
                                onChange={(e) => setFormData({ ...formData, openings: e.target.value })}
                            />
                        </Box>

                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Experience Level
                            </FormLabel>
                            <Box className='flex gap-5'>
                                <Select placeholder='Select minimum Experience' onChange={(e) => setFormData({ ...formData, experience: { ...authData.experience, low: e.target.value } })}>
                                    <option value='0'> 0</option>
                                    <option value='1'> 1</option>
                                    <option value='2'> 2</option>
                                    <option value='3'> 3</option>
                                </Select>
                                <Select placeholder='Select maximum Experience ' onChange={(e) => setFormData({ ...formData, experience: { ...authData.experience, high: e.target.value } })}>
                                    <option value='4'> 4</option>
                                    <option value='5'> 5</option>
                                    <option value='6'> 6</option>
                                    <option value='6'> 7</option>
                                    <option value='6'> 8</option>
                                    <option value='6'> 9</option>
                                    <option value='6'> 10</option>
                                </Select>

                            </Box>

                        </Box>

                        <Box className='flex flex-col text-nowrap items-start '>

                            <HStack spacing={4} className='w-10/12  p-4 ' >

                                {formData.skills.length > 0 && formData.skills.map((skill, idx) => (

                                    <Tag
                                        key={idx}
                                        size={"lg"}

                                        borderRadius='full'
                                        variant='outline'
                                        colorScheme='gray'
                                    >
                                        <TagLabel> <Avatar size={'xs'} /> {skill}</TagLabel>
                                        <TagCloseButton onClick={() => handleRemoveCandidate(skill)} className='cursor-pointe' />
                                    </Tag>
                                ))}

                            </HStack>


                            <Box className='flex flex-col text-nowrap items-start w-full '>
                                <FormLabel className='text-[32px] leading-[41.66px]'>
                                    Add Skills
                                </FormLabel>

                                <Input size={'lg'} placeholder='Add required skills' value={inputValue} onChange={handleInputChange} onKeyDown={handleAddSkill} />
                            </Box>


                        </Box>


                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Start Date
                            </FormLabel>
                            <Input type='date' value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} />
                        </Box>
                        <Box className='flex flex-col text-nowrap items-start '>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                End Date
                            </FormLabel>
                            <Input type='date' value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
                        </Box>

                        <Box className='flex justify-end'>
                            <Button
                                onClick={handlePostJob}
                                isLoading={isLoading}
                                colorScheme='blue'
                                paddingInline={10}
                            >Post</Button>

                        </Box>

                    </Stack>
                </FormControl>




            </Box>


        </Box>


    )
}

export default PostJob
