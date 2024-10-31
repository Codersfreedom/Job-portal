import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Components/Header'
import LeftSideBar from '../../Components/LeftSideBar'
import Internship from '../../Components/Internship'

const InternshipPage = () => {
  return (

    <Box className='grid-layout '>
      <Header/>
      <LeftSideBar/>

      <Box className="main min-h-screen max-w-screen flex p-5 md:p-10 justify-start items-start " >
        <Stack className='max-w-screen-md'>
          <Internship/>
         
        </Stack>
      </Box>

    </Box>
  )
}

export default InternshipPage
