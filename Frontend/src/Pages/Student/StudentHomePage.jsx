import Header from '../../Components/Header'
import LeftSideBar from '../../Components/LeftSideBar'
import HomeContent from './HomeContent'
import Footer from '../../Components/Footer'

const StudentHomePage = () => {
   
  return (
    <div className='grid-layout'>
            <Header  />
            <LeftSideBar  />
            <HomeContent />
            <Footer />
        </div>
  )
}

export default StudentHomePage
