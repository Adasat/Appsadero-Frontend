import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import HeaderMain from '../../Components/HeaderMain/HeaderMain'

function LayoutMain() {
  const headerTitle = 'APPSADERO'
  const footerTitle = 'Copyright © Chuletapp Company 2023 - All Rights Reserved'

  return (
        <>
        <HeaderMain title={headerTitle}/>
        <Outlet/>
        <Footer title={footerTitle}/>
    </>
  )
}

export default LayoutMain