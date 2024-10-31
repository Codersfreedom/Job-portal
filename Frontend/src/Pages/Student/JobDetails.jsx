import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Skeleton, SkeletonCircle, SkeletonText, Stack, StackDivider, Tag, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import Header from "../../Components/Header"
import LeftSideBar from "../../Components/LeftSideBar"
import { Bookmark, Calendar, DoorOpen, IndianRupee, Share2, Wallet } from "lucide-react"
import formatDate from "../../utils/FormatDate"
import timeAgo from "../../utils/timeAgo"
import useJobStore from "../../store/student/useJobStore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useStudentAuthStore from "../../store/student/useStudentAuthStore"

const JobDetails = () => {
    const [job, setJob] = useState();


    const { fetchJob, isLoading } = useJobStore();
    const { applyJob,student } = useStudentAuthStore();

    const { id } = useParams();




    useEffect(() => {
        const getJob = async () => {
            setJob(await fetchJob(id));
        }
        getJob();
    }, [id])

    const handleApplyJob = () => {
        applyJob(id);
    }
    
    const buttonSize = useBreakpointValue(['xs', 'md'])

    const isApplied = student?.applied?.jobs.includes(id);

    return (
        <Box className="grid-layout ">
            <Header />
            <LeftSideBar />
            <Box className="main max-w-screen-lg min-h-screen  p-5 md:p-10  ">
                <Stack className="w-full md:px-5 ">
                    <Card>

                        <CardHeader>
                            <Heading size='sm' display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
                                <Box className="flex gap-3 items-center justify-center">
                                    <SkeletonCircle isLoaded={!isLoading} className="flex gap-3 items-center justify-center">
                                        <Avatar src="" name="RM" />
                                    </SkeletonCircle>

                                    <Stack>
                                        <SkeletonText isLoaded={!isLoading} noOfLines={1}>
                                            <Text>{job?.title}</Text>

                                        </SkeletonText>
                                        <SkeletonText className="flex" isLoaded={!isLoading} noOfLines={1} width={20}>

                                            <Text fontWeight={'light'} size={'sm'}>Bangalore,India</Text>
                                        </SkeletonText>
                                    </Stack>
                                </Box>
                                <Box className="flex gap-2  items-center justify-end  flex-wrap">
                                    <Skeleton isLoaded={!isLoading} >
                                        <Badge rounded={'md'} padding={'1.5'} colorScheme="green">{job?.jobType}</Badge>

                                    </Skeleton>
                                    <Bookmark />
                                    <Share2 />
                                </Box>

                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box className="flex flex-wrap gap-5 ">
                                    {job && job?.skills.map((skill, idx) => (

                                        <Skeleton key={idx} isLoaded={!isLoading}>

                                            <Tag  >{skill}</Tag>
                                        </Skeleton>
                                    ))

                                    }



                                </Box>
                                <Box className="flex flex-wrap gap-5   justify-between">
                                    <Box>
                                        <Box className="flex  items-center justify-center gap-1 ">
                                            <Wallet size={'15px'} />
                                            <Heading size={'sm'}> Stipend per month</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} isLoaded={!isLoading} >
                                            <Text className="flex gap-2 items-center justify-center "> <IndianRupee size={'15px'} /> {job?.offer.low} - {job?.offer.high}</Text>
                                        </SkeletonText>

                                    </Box>


                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <Calendar size={'15px'} />
                                            <Heading size={'sm'}> Start Date</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={!isLoading}>
                                            <Text className="text-center "> {formatDate(job?.startDate)}</Text>

                                        </SkeletonText>
                                    </Box>
                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <Calendar size={'15px'} />
                                            <Heading size={'sm'}> Experience</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={!isLoading}>
                                            <Text className="text-center "> {job?.experience.low} - {job?.experience.high} Years</Text>

                                        </SkeletonText>
                                    </Box>
                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <DoorOpen size={'15px'} />
                                            <Heading size={'sm'}> Openings</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={!isLoading}>
                                            <Text className="text-center "> {job?.openings}</Text>

                                        </SkeletonText>
                                    </Box>
                                </Box>
                                <Box className="flex-col md:flex-row justify-between">
                                    <Stack className=" justify-start " >
                                        <SkeletonText noOfLines={1} width={40} isLoaded={!isLoading}>
                                            <Text className="text-xs md:text-sm " textTransform='uppercase' color={'green'}>
                                                {job?.applied?.length} Applicants
                                            </Text>
                                        </SkeletonText>

                                        <SkeletonText noOfLines={1} width={80} isLoaded={!isLoading}>
                                            <Text className="text-xs md:text-sm " color={'green'}>
                                                Apply by {formatDate(job?.endDate)} | posted {timeAgo(job?.createdAt)} ago
                                            </Text>
                                        </SkeletonText>

                                    </Stack>
                                    <Box className="flex gap-5 items-end mt-4  ">

                                        <Button colorScheme="blue" onClick={handleApplyJob} size={buttonSize} >{isApplied ? 'Applied':'Apply now'}</Button>
                                    </Box>

                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Stack>
                <Stack className="w-full md:px-5 mt-10">
                    <Card>
                        <CardHeader>
                            <Heading>Required Skills</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box className="flex gap-5 flex-wrap">
                                {job && job?.skills.map((skill, idx) => (
                                    <Skeleton key={idx} isLoaded={!isLoading} >
                                        <Tag >{skill}</Tag>

                                    </Skeleton>
                                ))

                                }
                            </Box>
                        </CardBody>
                    </Card>
                </Stack>

                <Stack className="w-full md:px-5 mt-10">
                    <Card>
                        <CardHeader>
                            <Heading>About</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box >
                                <SkeletonText noOfLines={10} isLoaded={!isLoading} className="flex gap-5 flex-wrap text-start ">
                                    <Text className="min-h-40">

                                        {job?.about}
                                    </Text>
                                </SkeletonText>

                            </Box>
                        </CardBody>
                    </Card>
                </Stack>
            </Box>
        </Box>
    )
}

export default JobDetails
