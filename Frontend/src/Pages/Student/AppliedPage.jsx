import { Box, IconButton, Stack, Text } from "@chakra-ui/react"
import Header from "../../Components/Header"
import LeftSideBar from "../../Components/LeftSideBar"
import { Filter } from "lucide-react"
import NoContentUI from "../../Components/NoContentUI"
import { useEffect, useState } from "react"
import AppliedCard from "../../Components/AppliedCard"
import useJobStore from "../../store/student/useJobStore"

const AppliedPage = () => {
  const [jobs, setJobs] = useState();
  const [internships, setInternship] = useState();
  const [option, setOption] = useState('jobs');

  const { fetchAppliedJobs, fetchAppliedInternships } = useJobStore()

  useEffect(() => {
    const getAplliedJob = async () => {
      setJobs(await fetchAppliedJobs());
    }
    getAplliedJob()
    const getAplliedInternships = async () => {
      setInternship(await fetchAppliedInternships());
    }
    getAplliedInternships()

  }, [])
  console.log(internships);
  return (
    <div className="grid-layout">
      <Header />
      <LeftSideBar />
      <Box className="main min-h-screen w-screen flex p-3 md:p-10 justify-start items-start" >
        <Stack className="max-w-screen-md border-2 bg-gray-100 rounded-md p-1 md:p-3">
          <Box className="flex gap-2 items-center w-full  justify-between">
            <Box className="border-r-4 pr-2 md:pr-10 w-1/2 text-center text-nowrap">
              <Text className={` md:text-xl inline cursor-pointer transition-transform duration-100 ease-in-out hover:border-b-2 border-blue-500 hover:text-blue-600  font-medium ${option === 'jobs' && 'border-b-2 border-blue-700 text-blue-600'} `} onClick={() => setOption('jobs')}>Applied Jobs({jobs?.length})</Text>

            </Box>
            <Box className="flex-1 text-center text-nowrap">
              <Text className={`md:text-xl inline cursor-pointer  duration-100 ease-in-out hover:border-b-2 border-blue-500 hover:text-blue-600 font-medium ${option === 'internships' && 'border-b-2 border-blue-700 text-blue-600'} `} onClick={() => setOption('internships')}>Applied Internships({internships?.length})</Text>

            </Box>
            <IconButton icon={<Filter color="blue" />}></IconButton>

          </Box>

          <Stack className="w-full">

            {option === 'jobs' ?

              <>
                {jobs?.length > 0 ? jobs.map((job) => (
                  <AppliedCard key={job._id} job={job} />

                )) : <NoContentUI ui={'jobs'} />}
              </>


              : <>
                {internships.length > 0 ? internships.map((internship) => (
                  <AppliedCard key={internship._id} internship={internship} />
                )) : <NoContentUI ui={'internships'} />}
              </>


            }



          </Stack>

        </Stack>
      </Box>
    </div>
  )
}

export default AppliedPage
