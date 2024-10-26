import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Tag, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import { Bookmark, Calendar, DoorOpen, History, Hourglass, IndianRupee, Info, Share2, SignalMedium, Wallet } from "lucide-react"

const Internship = () => {
    const buttonSize = useBreakpointValue(['xs', 'md'])
    return (
        <Stack className="w-full px-5">
            <Card>
                <Box className="flex gap-2 items-center justify-end px-5 pt-2 ">

                    <Tooltip
                        placement="top"
                        hasArrow
                        label='The candidate should have atleat 1 work experience or 2 projects'
                    >

                        <Button variant={'outline'} size={'xs'} rightIcon={<Info size={'17px'} />} colorScheme="orange">Intermediate</Button>
                    </Tooltip>
                </Box>
                <CardHeader>
                    <Heading size='sm' display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
                        <Box className="flex gap-3 items-center justify-center">
                            <Avatar src="" name="RM" />
                            <Stack>
                                <Text>FullStack Developer Internship</Text>
                                <Text fontWeight={'light'} size={'sm'}>Bangalore,India</Text>
                            </Stack>
                        </Box>
                        <Box className="flex gap-2  items-center justify-end  flex-wrap">
                            <Badge rounded={'md'} padding={'1.5'} colorScheme="green">Work From Home</Badge>
                            <Bookmark />
                            <Share2 />
                        </Box>

                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box className="flex flex-wrap gap-5 ">
                            <Tag>React</Tag>
                            <Tag>Express</Tag>
                            <Tag>Mongo db</Tag>


                        </Box>
                        <Box className="flex flex-wrap gap-5   justify-between">
                            <Box>
                                <Box className="flex  items-center justify-center gap-1 ">
                                    <Wallet size={'15px'} />
                                    <Heading size={'sm'}> Stipend per month</Heading>
                                </Box>
                                <Text className="flex gap-2 items-center justify-center "> <IndianRupee size={'15px'} /> 10k - 20k</Text>
                            </Box>
                            <Box>
                                <Box className="flex items-center justify-center gap-1 ">
                                    <History size={'15px'} />
                                    <Heading size={'sm'}> Duration</Heading>
                                </Box>
                                <Text className=" text-center ">  2 Months</Text>
                            </Box>
                            <Box>
                                <Box className="flex items-center justify-center gap-1 ">
                                    <Hourglass size={'15px'} />
                                    <Heading size={'sm'} > Mode</Heading>
                                </Box>
                                <Text className="text-center "> 5-6 hours/day</Text>
                            </Box>
                            <Box>
                                <Box className="flex items-center justify-center gap-1 ">
                                    <Calendar size={'15px'} />
                                    <Heading size={'sm'}> Start Date</Heading>
                                </Box>
                                <Text className="text-center "> Immediate</Text>
                            </Box>
                            <Box>
                                <Box className="flex items-center justify-center gap-1 ">
                                    <DoorOpen size={'15px'} />
                                    <Heading size={'sm'}> Openings</Heading>
                                </Box>
                                <Text className="text-center "> 2</Text>
                            </Box>
                        </Box>
                        <Box className="flex-col md:flex-row justify-between">
                            <Stack className=" justify-start " >
                                <Text className="text-xs md:text-sm " textTransform='uppercase' color={'green'}>
                                    100+ Applicants
                                </Text>
                                <Text className="text-xs md:text-sm " color={'green'}>
                                    Apply by 31 October 2024 | posted 20h ago
                                </Text>
                            </Stack>
                            <Box className="flex gap-5 items-end mt-4  ">
                                <Button colorScheme="blue" size={buttonSize}>View Details</Button>
                                <Button colorScheme="blue" size={buttonSize} >Apply Now</Button>
                            </Box>

                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    )
}

export default Internship
