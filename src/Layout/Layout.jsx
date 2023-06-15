import { Outlet } from 'react-router-dom'
import HeaderMain from '../Components/HeaderMain/HeaderMain'
import Footer from '../Components/Footer/Footer'

function Root() {
  return (
    <>
        <HeaderMain/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default Root