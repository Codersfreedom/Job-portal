import { Box, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Ellipse from '../Icons/Ellipse'
import Polygon from '../Icons/Polygon'


const Header = (isHome) => {
  return (
    <Box className= {` ${isHome && 'border-b'} header flex justify-between items-center navbar max-w-full min-h-[43px] px-10 py-7 `}  >
      <Box>
        <Link to={'/'}>
        <Image src='/logo.png' className='w-[165px] h-[43px] ' />
        </Link>
      </Box>
      <Box className=' h-[36px] flex gap-5  pr-28' >
        <p className='font-medium text-[28px] leading-[36.46px] text-[#576474] '>
         Contact 
        </p>
        <Button
          
          leftIcon={<Ellipse />}
          rightIcon={<Polygon />}
          >

            Your Name
          </Button>
        </Box>

      
    </Box>
  )
}

export default Header
