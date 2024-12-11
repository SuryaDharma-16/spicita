import React from 'react'
import Logo from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'

const SiteLogo = () => {
  return (
    <Link to={'/home'}><img src={Logo} alt="logo-spicita" /></Link>
  )
}

export default SiteLogo