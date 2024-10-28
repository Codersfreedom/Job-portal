import { Box, Button, Skeleton, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import useCompanyauthStore from "../../store/company/useCompanyauthStore";
import Job from "../../Components/Job";
import useJobStore from "../../store/student/useJobStore";
import useStudentAuthStore from "../../store/student/useStudentAuthStore";
import { useEffect } from "react";


const HomeContent = () => {
  const { company } = useCompanyauthStore();
  const { student } = useStudentAuthStore();
  const { jobs, fetchAllJobs, isLoading } = useJobStore()
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllJobs();
  }, [])


  return (
    <Box className="main min-h-screen max-w-screen flex p-5 md:p-10 justify-start items-start">
      {company && <Button
        onClick={() => { navigate('/create-interview') }}
        colorScheme="blue"
      >Create Interview</Button>}
      {company && <Button
        onClick={() => { navigate('/post-job') }}
        colorScheme="blue"
      >Post job</Button>}

      <Stack className="max-w-screen-md">
        {student && jobs && jobs.map((job)=>(
          <Skeleton isLoaded={!isLoading} key={job._id}  >
            <Job  job={job} />

          </Skeleton>
        ))

          }

      </Stack>


    </Box>
  )
}

export default HomeContent
