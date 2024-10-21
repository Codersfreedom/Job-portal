import {  Stack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer className='h-36 max-w-full bg-slate-600 px-10 '>
      <div className='flex px-20 justify-between items-center w-full h-full gap-5  '>
        <Stack className='text-white'>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>About</Text>

        </Stack>
        <Stack className='text-white text-xs'>
          <Text>rakeshmanna762@gmail.com</Text>
          <Text>Kolkata</Text>
          <Text>Github</Text>

        </Stack>
      </div>



    </footer>
  )
}

export default Footer
