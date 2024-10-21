import { Avatar, Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Textarea } from '@chakra-ui/react'
import LeftSideBar from '../Components/LeftSideBar'
import Header from '../Components/Header'
import { useState } from 'react'
import { useCreateInterview } from '../hooks/useCreateInterview'
import toast from 'react-hot-toast'

const CreateInterView = () => {
    const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        experience: "",
        candidate: [],
        endDate: ""
    })

    const handleAddCandidate = (e) => {
        if (e.key == 'Enter' && inputValue.trim() !== "") {
            e.preventDefault();
            setFormData((prevState) => ({
                ...prevState,
                candidate: [...prevState.candidate, inputValue]
            }))

            setInputValue("");
        }
    }

    const handleRemoveCandidate = (email) => {
        if (formData.candidate.length > 0) {
            setFormData((prevState) => ({
                ...prevState,
                candidate: prevState.candidate.filter((candidate) => candidate !== email)
            }))
        }
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const { isLoading, createInterview } = useCreateInterview();

    const handleCreateInterview = () => {
        if (!formData.title || !formData.description || !formData.description || !formData.experience || !formData.candidate.length > 0 || !formData.endDate) {
            return toast.error("Please enter all fields");
        }
        createInterview(formData);
        setFormData({
            title: "",
            description: "",
            experience: "",
            candidate: [],
            endDate: ""
        })
    }


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
                            <Input type='text' placeholder='Enter Job Title'
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </Box>



                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Job Description
                            </FormLabel>
                            <Textarea rows={10}  placeholder='Enter Job Description'
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </Box>


                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                Experience Level
                            </FormLabel>
                            <Select placeholder='Select Experience Level' onChange={(e) => setFormData({ ...formData, experience: e.target.value })}>
                                <option value='1'> 1</option>
                                <option value='2'> 2</option>
                                <option value='3'> 3</option>
                            </Select>
                        </Box>

                        <Box className=' flex flex-col text-nowrap items-end  gap-5'>

                            <HStack spacing={4} className='w-10/12  p-4 ' >

                                {formData.candidate.length > 0 && formData.candidate.map((email, idx) => (

                                    <Tag
                                        key={idx}
                                        size={"lg"}

                                        borderRadius='full'
                                        variant='outline'
                                        colorScheme='gray'
                                    >
                                        <TagLabel> <Avatar size={'xs'} /> {email}</TagLabel>
                                        <TagCloseButton onClick={() => handleRemoveCandidate(email)} className='cursor-pointe' />
                                    </Tag>
                                ))}

                            </HStack>


                            <Box className='flex text-nowrap items-center gap-5 w-full '>
                                <FormLabel className='text-[32px] leading-[41.66px]'>
                                    Add Candidate
                                </FormLabel>

                                <Input size={'lg'} value={inputValue} onChange={handleInputChange} onKeyDown={handleAddCandidate} />
                            </Box>


                        </Box>




                        <Box className='flex text-nowrap items-center gap-5'>
                            <FormLabel className='text-[32px] leading-[41.66px]'>
                                End Date
                            </FormLabel>
                            <Input placeholder='Select a Date' type='date' onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
                        </Box>

                        <Box className='flex justify-end'>
                            <Button
                                onClick={handleCreateInterview}
                                isLoading={isLoading}
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

export default CreateInterView
