import { Avatar, Box, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useCompanyauthStore from '../store/useCompanyauthStore'
import useStudentAuthStore from '../store/useStudentAuthStore'


const Header = () => {
  const { company, logout } = useCompanyauthStore();
  const { student, studentLogout } = useStudentAuthStore()




  return (
    <header className='border-b shadow-md z-10  flex  justify-between items-center navbar w-screen   min-h-16 px-7  py-4'  >
      <Box className='flex items-center gap-2'>
        <Link to={'/'}>
          <Image src='/logo.png' className='w-[121px] h-[30px] max-sm:w-20 max-sm:h-7 mix-blend-screen' />
        </Link>
      </Box>
      <Box className=' items-center flex gap-5  max-w-md  ' >
        <p className='font-medium text-xl hidden md:block text-[#576474] '>
          Contact
        </p>
        {(company || student) && (<Menu  >
         
            
              <div className=' cursor-pointer'>
                <MenuButton as={Avatar} size={'sm'} />

              </div>


              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Create Interview</MenuItem>
                <MenuItem>Find jobs</MenuItem>
                <MenuDivider />
                <MenuItem onClick={(e)=>{company?logout():studentLogout()}}  > Logout</MenuItem>
              </MenuList >
           
         
        </Menu>)}
      </Box>


    </header>
  )
}

export default Header
