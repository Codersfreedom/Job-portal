import Header from "../Components/Header"
import LeftSideBar from "../Components/LeftSideBar"
import HomeContent from "./HomeContent"
import Footer from "../Components/Footer"


const CompanyHomePage = () => {
 

    return (
        <div className='grid-layout'>
            <Header  />
            <LeftSideBar isOpen={isOpen} />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default CompanyHomePage
