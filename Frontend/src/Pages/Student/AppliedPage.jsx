import { Box, IconButton, Stack, Text } from "@chakra-ui/react"
import Header from "../../Components/Header"
import LeftSideBar from "../../Components/LeftSideBar"
import { Filter } from "lucide-react"
import NoContentUI from "../../Components/NoContentUI"
import { useState } from "react"
import AppliedCard from "../../Components/AppliedCard"

const AppliedPage = () => {
  const [option, setOption] = useState('internship');
  const internship = {};
  const jobs = {};
  return (
    <div className="grid-layout">
      <Header />
      <LeftSideBar />
      <Box className="main min-h-screen max-w-screen flex p-3 md:p-10 justify-start items-start" >
        <Stack className="max-w-screen-md border-2 bg-gray-100 rounded-md p-1 md:p-3">
          <Box className="flex gap-2 items-center w-full  justify-between">
            <Box className="border-r-4 pr-2 md:pr-10 w-1/2 text-center text-nowrap">
              <Text className={` md:text-xl inline cursor-pointer transition-transform duration-300 ease-in-out font-medium ${option === 'internship' && 'border-b-2 border-blue-700 text-blue-600'} `} onClick={() => setOption('internship')}>Applied Internships(0)</Text>

            </Box>
            <Box className="flex-1 text-center text-nowrap">
              <Text className={`md:text-xl inline cursor-pointer transition-transform duration-300 ease-in-out font-medium ${option === 'jobs' && 'border-b-2 border-blue-700 text-blue-600'} `} onClick={() => setOption('jobs')}>Applied Jobs(0)</Text>

            </Box>
            <IconButton icon={<Filter color="blue" />}></IconButton>

          </Box>

          <Stack className="w-full">

            {option === 'internship' ?

              <>
                {/* No content ui */}
                {internship ?
                  <>
                  <AppliedCard />
                  
                  
                  </>
                  :
                  <NoContentUI />
                }
              </>

              : <>

              </>}



          </Stack>

        </Stack>
      </Box>
    </div>
  )
}

export default AppliedPage
