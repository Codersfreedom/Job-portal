import { Box, Text, Tooltip, useColorMode } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { GraduationCap, Home, NotebookPenIcon, ShoppingBasketIcon } from 'lucide-react';


const LeftSideBar = () => {

    const navigator = useLocation().pathname;
    const {colorMode} = useColorMode()

    return (
        <aside className={`leftside   h-20 w-screen   flex-col   md:h-[calc(100vh-64.8px)] md:w-16 md:border-r shadow-lg justify-start items-center md:py-10 ${colorMode ==='light'? 'bg-white':'bg-gray-800'}`} >
            <Box className="flex md:flex-col gap-2 text-nowrap items-center justify-center ">
                <Link to={'/'} className={`flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full  py-2 md:py-5 ${(navigator === '/')&&( colorMode ==='light'?'bg-gray-200':'bg-slate-600') } rounded-md ${colorMode ==='light' ? 'hover:bg-gray-100' :'hover:bg-slate-700'}   group`}>
                    <Tooltip hasArrow label='Home' placement="right-end" className="hidden md:block w-full" >

                        <Box className={`w-full flex  flex-col items-center justify-center px-2 md:px-4  rounded-sm ${navigator === '/' && 'border-blue-500 text-blue-500 md:border-l-4'}  `}>
                            <Home size={'25px'} className="duration-200 ease-in-out group-hover:-translate-y-1 md:group-hover:-translate-y-2" />

                            <Text className="md:hidden ">Home</Text>
                        </Box>
                    </Tooltip>
                </Link>
                <Link to={'/jobs'} className={`flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full py-2 md:py-5 ${(navigator === '/jobs')&&( colorMode ==='light'?'bg-gray-200':'bg-slate-600') } rounded-md ${colorMode ==='light' ? 'hover:bg-gray-100' :'hover:bg-slate-700'} group `}>

                    <Tooltip hasArrow label="Full time jobs" placement="right-end" className="hidden md:block">
                        <Box className={`w-full flex  flex-col items-center justify-center px-2 md:px-4 md:border-l-4 rounded-sm ${navigator === '/jobs' && 'border-blue-500 text-blue-500'} `}>
                            <GraduationCap size={'25px'} className="duration-200 ease-in-out group-hover:-translate-y-1  md:group-hover:-translate-y-2" />

                            <Text className="md:hidden ">Jobs</Text>
                        </Box>
                    </Tooltip>

                </Link>
                <Link to={'/internship'} className={`flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full py-2 md:py-5 ${(navigator === '/internship')&&( colorMode ==='light'?'bg-gray-200':'bg-slate-600') } rounded-md ${colorMode ==='light' ? 'hover:bg-gray-100' :'hover:bg-slate-700'} group`}>
                    <Tooltip hasArrow label="Internships" placement="right-end" className="hidden md:block">
                        <Box className={`w-full flex  flex-col items-center justify-center px-2 md:px-4 md:border-l-4 rounded-sm ${navigator === '/internship' && 'border-blue-500 text-blue-500'} `}>
                            <ShoppingBasketIcon size={'25px'} className="duration-200 ease-in-out  group-hover:-translate-y-1 md:group-hover:-translate-y-2" />

                            <Text className=" md:hidden">Internships</Text>
                        </Box>

                    </Tooltip>

                </Link>

                <Link to={'/applied'} className={`flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full py-2 md:py-5 ${(navigator === '/applied')&&( colorMode ==='light'?'bg-gray-200':'bg-slate-600') } rounded-md ${colorMode ==='light' ? 'hover:bg-gray-100' :'hover:bg-slate-700'} group `}>
                    <Tooltip hasArrow label='Applied' placement="right-end" className="hidden md:block">
                        <Box className={`w-full flex  flex-col items-center justify-center px-2 md:px-4 md:border-l-4 rounded-sm ${navigator === '/applied' && 'border-blue-500 text-blue-500'} `}>
                            <NotebookPenIcon size={'25px'} className="duration-200 ease-in-out group-hover:-translate-y-1 md:group-hover:-translate-y-2" />

                        </Box>
                    </Tooltip>
                    <Text className="md:hidden ">Applied</Text>

                </Link>
            </Box>
        </aside>
    )
}

export default LeftSideBar
