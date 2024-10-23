import { Avatar, Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Polygon from '../Icons/Polygon'
import useAuthStore from '../store/useCompanyauthStore'
import { MenuIcon } from 'lucide-react'



const Header = ({  isOpen: isSideBarOpen, setOpen }) => {
  const { company, logout } = useAuthStore();

  const handleToggleSidebar = () => {
    setOpen(!isSideBarOpen);
  }


  return (
    <header className='border-b shadow-md z-10 bg-white/10 flex  justify-between items-center navbar w-screen   min-h-16 px-7  py-4'  >
      <Box className='flex items-center gap-2'>
        <MenuIcon size={'30px'} className='cursor-pointer block md:hidden' onClick={handleToggleSidebar} />
        <Link to={'/'}>
          <Image src='/logo.png' className='w-[121px] h-[30px] max-sm:w-20 max-sm:h-7 ' />
        </Link>
      </Box>
      <Box className=' items-center flex gap-5  max-w-md  ' >
        <p className='font-medium text-xl hidden md:block text-[#576474] '>
          Contact
        </p>
        {company && <Menu  >
          {({ isOpen }) => (
            <>

              <div className='block lg:hidden cursor-pointer'>
                <MenuButton as={Avatar} size={'sm'} />

              </div>

              {/* <div className='hidden lg:block'>
                <MenuButton as={Button} colorScheme='blue' variant={'outline'} leftIcon={<Avatar name={company.name} size={'xs'} />} rightIcon={<Polygon value={isOpen ? 0 : 180} />}>
                  {company.name}
                </MenuButton>
              </div> */}






              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Create Interview</MenuItem>
                <MenuItem>Find jobs</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout} > Logout</MenuItem>
              </MenuList >
            </>
          )}
        </Menu>}
      </Box>


    </header>
  )
}

export default Header
