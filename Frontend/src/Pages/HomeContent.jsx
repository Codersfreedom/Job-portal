import { Box, Button, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import useCompanyauthStore from "../store/company/useCompanyauthStore";
import Job from "../Components/Job";


const HomeContent = () => {
  const { company } = useCompanyauthStore();

  const navigate = useNavigate();

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
        {!company && <Job />}

      </Stack>


    </Box>
  )
}

export default HomeContent
