import { Avatar, Badge, Box, Button, Card, CardBody, CardHeader, Heading, Image, Stack, StackDivider, Tag, Text, useBreakpointValue } from "@chakra-ui/react"
import { Brain, Calendar, DoorOpen, History, IndianRupee, ReceiptIndianRupee, Share2, User } from "lucide-react"

const Job = () => {
  const buttonSize = useBreakpointValue(['xs','md'])
  return (
    <Stack className="w-full px-5">
      <Card>
        <CardHeader>
          <Heading size='sm' display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
            <Box className="flex gap-3 items-center justify-center">
              <Avatar src="" name="RM" />
              <Stack>
                <Text>Fix Healt</Text>
                <Text fontWeight={'light'} size={'sm'}>Bangalore,India</Text>
              </Stack>
            </Box>
            <Box className="flex gap-2 items-center">
              <Badge padding={1.5} rounded={'md'} colorScheme="green">Remote</Badge>
              <Share2 />
            </Box>

          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box className="flex flex-wrap gap-2 w-full ">
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>
              <Tag>Data Mining</Tag>

            </Box>
            <Box className="flex flex-wrap    justify-between">
              <Box>
                <Box className="flex  items-center justify-center gap-1 ">
                  <ReceiptIndianRupee size={'15px'} />
                  <Heading size={'sm'}> Offer</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <IndianRupee size={'15px'} /> 4.8LPA - 5.5 LPA</Text>
              </Box>
              <Box>
                <Box className="flex items-center justify-center gap-1 ">
                  <Calendar size={'15px'} />
                  <Heading size={'sm'}> Start Date</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <History size={'15px'} /> Imediate</Text>
              </Box>
              <Box>
                <Box className="flex items-center justify-center gap-1 ">
                  <DoorOpen size={'15px'} />
                  <Heading size={'sm'} > Openings</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> <User size={'15px'} /> 1</Text>
              </Box>
              <Box>
                <Box className="flex items-center justify-center gap-1 ">
                  <Brain size={'15px'} />
                  <Heading size={'sm'}> Experience</Heading>
                </Box>
                <Text className="flex gap-2 items-center mt-2 "> 0-3 years</Text>
              </Box>
            </Box>
            <Box className="flex-col md:flex-row justify-between">
              <Stack className=" justify-start" >
                <Text  className="text-xs md:text-sm t" textTransform='uppercase' color={'green'}>
                  100+ Applicants
                </Text>
                <Text  className="text-xs md:text-sm " color={'green'}>
                  Apply by 31 October 2024 | posted 20h ago
                </Text>
              </Stack>
              <Box className="flex gap-5 items-end mt-4  ">
                <Button colorScheme="blue" size={buttonSize}   >View Details</Button>
                <Button  colorScheme="blue" size={buttonSize} >Apply Now</Button>
              </Box>

            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  )
}

export default Job
