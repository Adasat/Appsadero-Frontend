import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import HeaderMain from '../../Components/HeaderMain/HeaderMain'
import HeaderWelcome from '../../Components/HeaderWelcome/HeaderWelcome'
import { useEffect, useState } from 'react'

function LayoutMain() {
  const headerTitle = 'APPSADERO'
  const footerTitle = 'Copyright © Chuletapp Company 2023 - All Rights Reserved'
  const [header, setHeader] = useState()

  const han = () => {
    localStorage.getItem('token')
      ? setHeader(<HeaderMain title={headerTitle} />)
      : setHeader(<HeaderWelcome title={headerTitle} />)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      han()
    }, 10)
    return () => clearTimeout(delay)
  }, [header])

  return (
    <>
      {header}
      <Outlet />
      <Footer title={footerTitle} />
    </>
  )
}

export default LayoutMain