import { Image } from "@chakra-ui/react"


const Polygon = ({value}) => {

  return (
   <Image src="/Polygon 1.png" className={`w-4 h-4 ease-in-out duration-200    rotate-${value}`} />
  )
}

export default Polygon
