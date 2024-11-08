import { Box,Spinner } from '@chakra-ui/react'


const LoadingSpinner = () => {
  return (
    <Box className='min-h-screen w-screen flex items-center justify-center' >
      <Spinner  />
    </Box>
  )
}

export default LoadingSpinner;
