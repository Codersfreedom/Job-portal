import Header from "../Components/Header"
import LeftSideBar from "../Components/LeftSideBar"
import HomeContent from "./HomeContent"
import Footer from "../Components/Footer"
import { useState } from "react"


const CompanyHomePage = () => {
    const [isOpen,setOpen] = useState(false);

    return (
        <div className='grid-layout'>
            <Header isHome={true} isOpen={isOpen} setOpen={setOpen} />
            <LeftSideBar isOpen={isOpen} />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default CompanyHomePage
