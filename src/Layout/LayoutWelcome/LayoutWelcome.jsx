import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import HeaderWelcome from '../../Components/HeaderWelcome/HeaderWelcome'

function LayoutWelcome() {
  const headerTitle = 'APPSADERO'
  const footerTitle = 'Copyright © Chuletapp Company 2023 - All Rights Reserved'

  return (
    <>
      <HeaderWelcome title={headerTitle} />
      <Outlet />
      <Footer title={footerTitle}/>
    </>
  )
}
export default LayoutWelcome
