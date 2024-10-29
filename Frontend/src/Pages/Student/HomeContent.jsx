import { Box, Skeleton, Stack } from "@chakra-ui/react"
import Job from "../../Components/Job";
import useJobStore from "../../store/student/useJobStore";
import useStudentAuthStore from "../../store/student/useStudentAuthStore";
import { useEffect } from "react";


const HomeContent = () => {
 
  const { student } = useStudentAuthStore();
  const { jobs, fetchAllJobs, isLoading } = useJobStore()

  useEffect(() => {
    fetchAllJobs();
  }, [])




  return (
    <Box className="main min-h-screen max-w-screen flex p-5 md:p-10 justify-start items-start">
      <Stack className="max-w-screen-md">
        {student && jobs && jobs.map((job)=>(
          <Skeleton isLoaded={!isLoading} key={job._id} className="w-full"  >
            <Job  job={job} />

          </Skeleton>
        ))

          }

      </Stack>


    </Box>
  )
}

export default HomeContent
