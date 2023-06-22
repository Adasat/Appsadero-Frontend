import { Box } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slice1 from '../../assets/slice.png'
import Slice2 from "../../assets/slice2.png"
import Slice3 from '../../assets/slice3.png'
import Slice4 from '../../assets/slice4.png'

function WelcomeView() {
  return (
    <Box width={'99vw'} height={'50%'}>
        <Carousel width={'100%'} autoPlay={true} showArrows dynamicHeight infiniteLoop interval={5000} useKeyboardArrows={true} showThumbs={false} >
        <div>
        <img alt="" src={Slice1}/>
        </div>
        <div>
        <img alt="" src={Slice2}/>
        </div>
        <div>
        <img alt="" src={Slice3} />
        </div>
        <div>
        <img alt="" src={Slice4} />
        </div>
        
    </Carousel>
  </Box>
  )
}

export default WelcomeView



