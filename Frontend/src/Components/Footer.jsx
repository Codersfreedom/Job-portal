import {  Box, Image, Stack, Text } from '@chakra-ui/react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='min-h-64 lg:min-h-32   w-screen bg-slate-600  '>
      <div className='flex  justify-center items-center w-full h-full p-10  '>
        <div className='text-white min-h-64 lg:min-h-32 w-full flex flex-col  md:flex-row justify-between items-center' gap={10}  >
          
          <Image src='/cuvetteWhite.svg '  className='mix-blend-screen w-44' />
          <Box className='flex justify-center items-center gap-10 md:order-3' >
            <Instagram />
            <Linkedin />
            <Youtube />
            <Facebook />
          </Box>
          <div className='flex flex-col w-screen h-fit items-center  gap-2  '>
            <Box className='flex gap-3 px-5 flex-wrap '>
             <Link to={'#'}>Contact</Link>
            <Text>About Us</Text>
            <Text>Terms</Text>
            <Text>Refunds</Text>
            <Text>Privacy</Text> 
            </Box>
            
            <Box>
            <Text>Made with ♥ by <a href='https://www.github.com/codersfreedom' target='_blank'>Rakesh</a></Text>

            </Box>
          </div>

        </div>
       
      </div>



    </footer>
  )
}

export default Footer
