import { Box, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const LeftSideBar = ({isOpen}) => {
    
    return (
        <aside className={ `leftside ${isOpen ? "flex":"hidden "} bg-white  flex-col  lg:block w-40 lg:w-16 border-r shadow-lg justify-start items-center py-4`} >
            <Box>
                <Link to={'/'} className="flex flex-col items-center gap-1   ">
                    <Image src="/Home.png" className="w-7" />
                    <Text className="lg:hidden ">Home</Text>

                </Link>
            </Box>
        </aside>
    )
}

export default LeftSideBar
