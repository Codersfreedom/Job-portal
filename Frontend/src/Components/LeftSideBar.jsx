import { Box, Image, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const LeftSideBar = () => {
    return (
        <Stack className=" leftside h-screen w-20 border-r justify-start items-center py-4" >
            <Box>
                <Link to={'/'}>
                    <Image src="/Home.png" className="w-[34.04px] h-[35.83px]" />

                </Link>
            </Box>
        </Stack>
    )
}

export default LeftSideBar
