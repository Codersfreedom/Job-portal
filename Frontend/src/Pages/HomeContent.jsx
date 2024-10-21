import { Box, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <Box className="main h-screen w-screen flex p-10 justify-start items-start">
      <Button
      onClick={()=>{navigate('/create-interview')}}
      colorScheme="blue"
      >Create Interview</Button>
    </Box>
  )
}

export default HomeContent
