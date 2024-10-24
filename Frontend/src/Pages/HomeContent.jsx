import { Box, Button, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import useCompanyauthStore from "../store/useCompanyauthStore";
import Job from "../Components/Job";


const HomeContent = () => {
  const { company } = useCompanyauthStore();

  const navigate = useNavigate();

  return (
    <Box className="main min-h-screen max-w-screen flex md:p-10 justify-start items-center">
      {company && <Button
        onClick={() => { navigate('/create-interview') }}
        colorScheme="blue"
      >Create Interview</Button>}
      <Stack className="max-w-screen-md">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />

      </Stack>


    </Box>
  )
}

export default HomeContent
