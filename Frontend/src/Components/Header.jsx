import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useCompanyauthStore from '../store/company/useCompanyauthStore'
import useStudentAuthStore from '../store/student/useStudentAuthStore'
import { Moon, Sun } from 'lucide-react'


const Header = () => {
  const { company, logout } = useCompanyauthStore();
  const { student, studentLogout } = useStudentAuthStore()

  const { colorMode, toggleColorMode } = useColorMode()



  return (
    <header className={`border-b shadow-md z-10  flex  justify-between items-center  w-screen   min-h-16 px-7 ${colorMode ==='light'? 'bg-white':'bg-gray-800'}  py-4`} >
      <Box className='flex items-center gap-2'>
        <Link to={'/'}>
        {colorMode ==='light'? 
        <Image src='/logo.png' className='w-[121px] h-[30px] max-sm:w-20 max-sm:h-7 ' />:
        <Image src='/cuvetteWhite.svg' className='w-[121px] h-[30px] max-sm:w-20 max-sm:h-7 ' />
        
      }
        </Link>
      </Box>
      <Box className=' items-center flex gap-5  max-w-md  ' >
        <Text className='font-medium text-xl hidden md:block '>
          Contact
        </Text>
        {(company || student) && (<Menu  >


          <Flex gap={3} alignItems={'center'} className=' cursor-pointer'>
            <Box onClick={toggleColorMode}>
              {colorMode === 'dark' ? <Sun /> : <Moon />}

            </Box>
            <MenuButton as={Avatar} size={'sm'} />

          </Flex>


          <MenuList>
            <Link to='/resume'><MenuItem> Edit Resume</MenuItem></Link>
            <Link to='/profile'> <MenuItem>Settings</MenuItem></Link>
            {company && <MenuItem>Create Interview</MenuItem>}
            <MenuItem>Find jobs</MenuItem>
            <MenuDivider />
            <MenuItem onClick={(e) => { company ? logout() : studentLogout() }}  > Logout</MenuItem>
          </MenuList >


        </Menu>)}
      </Box>


    </header>
  )
}

export default Header
