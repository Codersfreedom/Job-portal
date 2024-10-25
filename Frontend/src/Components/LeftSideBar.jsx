import { Text, Tooltip } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { GraduationCap, Home, NotebookPenIcon, ShoppingBasketIcon } from 'lucide-react';

const LeftSideBar = () => {

    const navigator = useLocation().pathname;
    

    return (
        <aside className='leftside  bg-white h-28 w-screen   flex-col   md:h-[calc(100vh-64.8px)] md:w-16 md:border-r shadow-lg justify-start items-center  py-10' >
            <div gap={5} className="flex md:flex-col text-nowrap items-center justify-center ">
                <Link to={'/'} className="flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full p-2   ">
                    <Tooltip hasArrow label='Home' placement="right-end"  className="hidden md:block" >


                        <Home size={'25px'} className={`${navigator ==='/'&& 'text-blue-500'}`}  />
                    </Tooltip>
                        <Text className="md:hidden ">Home</Text>
                </Link>
                <Link to={'/'} className="flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full p-2   ">
                    <Tooltip hasArrow label="Full time jobs" placement="right-end" className="hidden md:block">

                    <GraduationCap size={'25px'} />
                    </Tooltip>
                    <Text className="md:hidden ">Full Time Jobs</Text>

                </Link>
                <Link to={'/internship'} className="flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full p-2  ">
                <Tooltip hasArrow label="Internships" placement="right-end" className="hidden md:block">
                    <ShoppingBasketIcon size={'25px'} className={`${navigator ==='/internship'&& 'text-blue-500'}`} />

                </Tooltip>
                    <Text className="md:hidden ">Internships</Text>

                </Link>
                <Link to={'/applied'} className="flex flex-col md:flex-row justify-center  items-center md:gap-3 w-full p-2   ">
                <Tooltip hasArrow label='Applied' placement="right-end" className="hidden md:block">

                    <NotebookPenIcon size={'25px'} className={`${navigator ==='/applied'&& 'text-blue-500'}`} />
                </Tooltip>
                    <Text className="md:hidden ">Applied</Text>

                </Link>
            </div>
        </aside>
    )
}

export default LeftSideBar
