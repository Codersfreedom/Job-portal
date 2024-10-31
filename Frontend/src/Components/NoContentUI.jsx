import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { Cloud } from 'lucide-react'

const NoContentUI = ({ui}) => {
  return (
    <Box className="w-full min-h-48 flex items-center justify-center">
    <Stack gap={5} className="items-center p-5 ">
      <Stack gap={5} justifyItems={'center'} alignItems={'center'} >
        <Cloud size={'50px'} />
        <Text>No Applied {ui}</Text>
        <Text>You have not applied to any {ui} yet.</Text>
      </Stack>
      <Button
        colorScheme="blue"
      >Search {ui}</Button>
    </Stack>

  </Box>
  )
}

export default NoContentUI
