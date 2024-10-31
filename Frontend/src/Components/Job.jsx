import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Tag, Text, useBreakpointValue } from "@chakra-ui/react"
import { Brain, Calendar, DoorOpen, History, IndianRupee, ReceiptIndianRupee, Share2, User } from "lucide-react"
import formatDate from "../utils/FormatDate"
import timeAgo from "../utils/timeAgo"
import { Link } from "react-router-dom"
import useStudentAuthStore from "../store/student/useStudentAuthStore"
import toast from "react-hot-toast"


const Job = ({ job }) => {
  const { student, applyJob, isLoading } = useStudentAuthStore();

  const buttonSize = useBreakpointValue(['xs', 'md']);

  const isApplied = student?.applied.jobs.includes(job._id);

  const handleApply = () => {
    if (isApplied) return toast.error("You have already applied to this job")
    applyJob(job?._id)

  }
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Apply this job now!",
        text: job?.title,
        url: `${window.location.href}job/${job._id}`
      }).then(() => toast.success("Job shared"))
        .catch((error) => console.log(error))
    } else {
      alert('Share not supported on this browser')
    }
  }

  return (
    <Stack className="w-full ">
      <Card>
        <CardHeader>
          <Heading size='sm' display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
            <Box className="flex gap-3 items-center justify-center">
              <Avatar src="" name="RM" />
              <Stack>
                <Text>{job.title}</Text>
                <Text fontWeight={'light'} size={'sm'}>Bangalore,India</Text>
              </Stack>
            </Box>
            <Box className="flex gap-2 items-center flex-wrap justify-end">
              <Badge padding={1.5} rounded={'md'} colorScheme="green">{job.jobType}</Badge>
              <Share2 onClick={handleShare} cursor={'pointer'} />
            </Box>

          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box className="flex flex-wrap gap-2 w-full ">
              {job.skills.map((skill, idx) => (
                <Tag key={idx} >{skill}</Tag>

              ))
              }


            </Box>
            <Box className="flex flex-wrap gap-10 ">
              <Stack alignItems={'center'}>
                <Box className="flex  items-center justify-center gap-1 ">
                  <ReceiptIndianRupee size={'15px'} />
                  <Heading size={'sm'}> Offer</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <IndianRupee size={'15px'} /> {job.offer.low} - {job.offer.high}</Text>
              </Stack>
              <Stack alignItems={'center'}>
                <Box className="flex items-center justify-center gap-1 ">
                  <Calendar size={'15px'} />
                  <Heading size={'sm'}> Start Date</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <History size={'15px'} /> {formatDate(job.startDate)}</Text>
              </Stack>
              <Stack alignItems={'center'}>
                <Box className="flex items-center justify-center gap-1 ">
                  <DoorOpen size={'15px'} />
                  <Heading size={'sm'} > Openings</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <User size={'15px'} /> {job.openings}</Text>
              </Stack>
              <Stack alignItems={'center'}>
                <Box className="flex items-center justify-center gap-1 ">
                  <Brain size={'15px'} />
                  <Heading size={'sm'}> Experience</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> {job.experience.low} - {job.experience.high} years</Text>
              </Stack>
            </Box>
            <Box className="flex-col md:flex-row justify-between">
              <Stack className=" justify-start" >
                <Text className="text-xs md:text-sm t" textTransform='uppercase' color={'green'}>
                  {job.applied.length} Applicants
                </Text>
                <Text className="text-xs md:text-sm " color={'green'}>
                  Apply by  {formatDate(job.endDate)} | Posted {timeAgo(job.createdAt)}
                </Text>
              </Stack>
              <Box className="flex gap-5 items-end mt-4  ">
                <Button colorScheme="blue" size={buttonSize}><Link to={`/job/${job._id}`}>View Details</Link></Button>
                <Button isLoading={isLoading} colorScheme="blue" size={buttonSize} onClick={handleApply} >{isApplied ? 'Applied' : 'Apply now'}</Button>
              </Box>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  )
}

export default Job
