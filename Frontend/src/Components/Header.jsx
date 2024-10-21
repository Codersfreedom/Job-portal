import { Avatar, Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Polygon from '../Icons/Polygon'
import useAuthStore from '../store/useAuthStore'
import { MenuIcon } from 'lucide-react'



const Header = ({ isHome, isOpen: isSideBarOpen, setOpen }) => {
  const { user, logout } = useAuthStore();

  const handleToggleSidebar = () => {
    setOpen(!isSideBarOpen);
  }


  return (
    <header className={` ${isHome && 'border-b'} flex  justify-between items-center navbar max-w-full min-h-16 px-7 py-4 `}  >
      <Box className='flex items-center gap-2'>
        <MenuIcon size={'30px'} className='cursor-pointer block md:hidden' onClick={handleToggleSidebar} />
        <Link to={'/'}>
          <Image src='/logo.png' className='w-[121px] h-[30px] max-sm:w-20 max-sm:h-7 ' />
        </Link>
      </Box>
      <Box className=' items-center flex gap-5 pr-5  lg:pr-20' >
        <p className='font-medium text-xl hidden md:block text-[#576474] '>
          Contact
        </p>
        {user && <Menu  >
          {({ isOpen }) => (
            <>

              <div className='block lg:hidden cursor-pointer'>
                <MenuButton as={Avatar}  size={'sm'}  />

              </div>

                <div className='hidden lg:block'>
                  <MenuButton as={Button} colorScheme='blue' variant={'outline'} leftIcon={<Avatar name={user.name} size={'xs'} />} rightIcon={<Polygon value={isOpen ? 0 : 180} />}>
                  {user.name}
                </MenuButton>
                </div>
                
              




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
