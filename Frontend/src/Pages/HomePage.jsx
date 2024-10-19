import { Box } from "@chakra-ui/react"
import Header from "../Components/Header"
import LeftSideBar from "../Components/LeftSideBar"
import HomeContent from "./HomeContent"


const HomePage = () => {
    return (
        <Box className='grid-layout'>
            <Header isHome={true} />
            <LeftSideBar />
            <HomeContent />
        </Box>
    )
}

export default HomePage
