import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import { Info, Share2 } from "lucide-react"
import formatDate from "../utils/FormatDate"
import { Link } from "react-router-dom"


const AppliedCard = ({ job,ui }) => {
  const buttonSize = useBreakpointValue(['xs', 'md'])
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Apply now!",
        text: job?.title,
        url: `#/${ui}/${job._id}`
      }).then(() => toast.success("Job shared"))
        .catch((error) => console.log(error))
    } else {
      toast.error("Your browser doesn't support this feature")
    }
  }

  return (
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
          <Box className="flex flex-col-reverse items-end  md:flex-row gap-2  md:items-center">
            <Badge padding={1.5} rounded={'md'} colorScheme="green">{job.jobType}</Badge>
            <Tooltip
              label="Application is being reviewed by the company.this process can take 1-2 days. "
              hasArrow

            >

              <Button size={'sm'} variant={'outline'} colorScheme="blue" rightIcon={<Info size={'15px'} />}>Applied</Button>

            </Tooltip>

            <Share2 cursor={'pointer'} onClick={handleShare} />
          </Box>

        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>


          <Box className="flex-col md:flex-row justify-between">
            <Stack className=" justify-start" >
              <Text color={'green'}>
                Job closes on {formatDate(job.endDate)}
              </Text>
              <Text color={'green'}>
                {job.applied.length} Applicantes
              </Text>
            </Stack>
            <Box className="flex gap-5 items-end mt-4  ">
              <Button size={buttonSize} colorScheme="blue" > <Link to={`/job/${job._id}`}>View Details</Link></Button>
              <Button size={buttonSize} colorScheme="blue"  >Messages</Button>
            </Box>

          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default AppliedCard
