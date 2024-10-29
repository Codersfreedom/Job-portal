import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Image, Skeleton, SkeletonCircle, SkeletonText, Stack, StackDivider, Tag, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import Header from "../../Components/Header"
import LeftSideBar from "../../Components/LeftSideBar"
import { Bookmark, Brain, Calendar, DoorOpen, History, Hourglass, IndianRupee, Info, ReceiptIndianRupee, Share2, User, Wallet } from "lucide-react"
import formatDate from "../../utils/FormatDate"
import timeAgo from "../../utils/timeAgo"
import { Link } from "react-router-dom"

const JobPage = () => {
    const isLoading = true;
    const buttonSize = useBreakpointValue(['xs', 'md'])
    const job = {
        "_id": {
            "$oid": "671e5cfd8abf8f2f04e57f61"
        },
        "title": "Full stack web development",
        "company": {
            "$oid": "67189490527de297ac5f73be"
        },
        "jobType": "Work from home",
        "offer": {
            "low": 10000,
            "high": 15000
        },
        "openings": 10,
        "applied": [],
        "startDate":
            "2024-10-28T00:00:00.000Z"
        ,
        "endDate":
            "2024-10-31T00:00:00.000Z"
        ,
        "location": "",
        "experience": {
            "low": 1,
            "high": 2
        },
        "skills": [
            "reactjs",
            "express",
            "mongodb"
        ],
        "about": "You love giving life to beautiful looking ideas, you really want your work to be seen, and you enjoy replicating latest design trends. You’re comfortable making responsive websites and apps. You may not get detailed requirements, but you’re willing to use your imagination and inspirations to come up with something that astounds your audience 🙂 And most importantly, you’re willing to take feedbacks (from both, the team and patients), and keep iterating till your work meets the intended purpose Key Roles and Responsibilities Develop responsive websites, based on either wireframes or design mocks Debug and build new functionalities to our existing website (built on NextJS) and mobile webapp (built on Ionic + Capacitor) Spend time to go through website recordings and analytics tools to understand how your change impacted the user behavior Suggest design inspirations to the team and help improve aesthetics of our current website/app Occasional simple changes on NodeJS based backend whenever required Skills RequiredExpert level proficiency in React.JS (TypeScript) Expert level proficiency in Vanilla JS and CSS-in-JS libraries Moderate level proficiency in JS Animations and Transitions Strong Teamwork and dedication to work extended hours when required Should have a laptop.Plus Points Beginner level proficiency in React Native Medium level proficiency on create designs on Figma Medium level proficiency on writing backend APIs using NodeJS Beginner level proficiency on some analytics tool",
        "createdAt":
            "2024-10-27T15:32:13.758Z",

        "updatedAt": {
            "$date": "2024-10-27T15:32:13.758Z"
        },
        "__v": 0
    }
    return (
        <div className="grid-layout">
            <Header />
            <LeftSideBar />
            <Box className="main max-w-screen min-h-screen p-5 ">
                <Stack className="w-full ">
                    <Card>

                        <CardHeader>
                            <Heading size='sm' display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
                                <Box className="flex gap-3 items-center justify-center">
                                    <SkeletonCircle isLoaded={isLoading} className="flex gap-3 items-center justify-center">
                                        <Avatar src="" name="RM" />
                                    </SkeletonCircle>

                                    <Stack>
                                        <SkeletonText isLoaded={isLoading} noOfLines={1}>
                                            <Text>{job.title}</Text>

                                        </SkeletonText>
                                        <SkeletonText className="flex" isLoaded={isLoading} noOfLines={1} width={20}>

                                            <Text fontWeight={'light'} size={'sm'}>Bangalore,India</Text>
                                        </SkeletonText>
                                    </Stack>
                                </Box>
                                <Box className="flex gap-2  items-center justify-end  flex-wrap">
                                    <Skeleton isLoaded={isLoading} >
                                        <Badge rounded={'md'} padding={'1.5'} colorScheme="green">{job.jobType}</Badge>

                                    </Skeleton>
                                    <Bookmark />
                                    <Share2 />
                                </Box>

                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box className="flex flex-wrap gap-5 ">
                                    {job && job.skills.map((skill, idx) => (

                                        <Skeleton key={idx} isLoaded={isLoading}>

                                            <Tag >{skill}</Tag>
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
                                        <SkeletonText noOfLines={1} isLoaded={isLoading} >
                                            <Text className="flex gap-2 items-center justify-center "> <IndianRupee size={'15px'} /> {job.offer.low} - {job.offer.high}</Text>
                                        </SkeletonText>

                                    </Box>


                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <Calendar size={'15px'} />
                                            <Heading size={'sm'}> Start Date</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={isLoading}>
                                            <Text className="text-center "> {formatDate(job.startDate)}</Text>

                                        </SkeletonText>
                                    </Box>
                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <Calendar size={'15px'} />
                                            <Heading size={'sm'}> Experience</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={isLoading}>
                                            <Text className="text-center "> {job.experience.low} - {job.experience.high} Years</Text>

                                        </SkeletonText>
                                    </Box>
                                    <Box>
                                        <Box className="flex items-center justify-center gap-1 ">
                                            <DoorOpen size={'15px'} />
                                            <Heading size={'sm'}> Openings</Heading>
                                        </Box>
                                        <SkeletonText noOfLines={1} height={10} isLoaded={isLoading}>
                                            <Text className="text-center "> {job.openings}</Text>

                                        </SkeletonText>
                                    </Box>
                                </Box>
                                <Box className="flex-col md:flex-row justify-between">
                                    <Stack className=" justify-start " >
                                        <SkeletonText noOfLines={1} width={40} isLoaded={isLoading}>
                                            <Text className="text-xs md:text-sm " textTransform='uppercase' color={'green'}>
                                                {job.applied.length} Applicants
                                            </Text>
                                        </SkeletonText>

                                        <SkeletonText noOfLines={1} width={80} isLoaded={isLoading}>
                                           <Text className="text-xs md:text-sm " color={'green'}>
                                            Apply by {formatDate(job.endDate)} | posted {timeAgo(job.createdAt)} ago
                                        </Text> 
                                        </SkeletonText>
                                        
                                    </Stack>
                                    <Box className="flex gap-5 items-end mt-4  ">

                                        <Button colorScheme="blue" size={buttonSize} >Apply Now</Button>
                                    </Box>

                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Stack>
                <Stack className="w-full px-5 mt-10">
                    <Card>
                        <CardHeader>
                            <Heading>Required Skills</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box className="flex gap-5 flex-wrap">
                                {job && job.skills.map((skill, idx) => (
                                    <Skeleton key={idx} isLoaded={isLoading} >
                                        <Tag >{skill}</Tag>

                                    </Skeleton>
                                ))

                                }
                            </Box>
                        </CardBody>
                    </Card>
                </Stack>

                <Stack className="w-full px-5 mt-10">
                    <Card>
                        <CardHeader>
                            <Heading>About</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box className="flex gap-5 flex-wrap text-start">
                                <SkeletonText noOfLines={20} isLoaded={isLoading}>

                                {job.about}
                                </SkeletonText>

                            </Box>
                        </CardBody>
                    </Card>
                </Stack>
            </Box>
        </div>
    )
}

export default JobPage
