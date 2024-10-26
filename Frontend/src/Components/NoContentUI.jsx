import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { Cloud } from 'lucide-react'

const NoContentUI = () => {
  return (
    <Box className="w-full min-h-48 flex items-center justify-center">
    <Stack gap={5} className="items-center p-5 ">
      <Stack gap={5} justifyItems={'center'} alignItems={'center'} >
        <Cloud size={'50px'} />
        <Text>No Applied Internships</Text>
        <Text>You have not applied to any internship yet.</Text>
      </Stack>
      <Button
        colorScheme="blue"
      >Search Internship</Button>
    </Stack>

  </Box>
  )
}

export default NoContentUI
