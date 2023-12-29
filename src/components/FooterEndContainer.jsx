import React from 'react'
import FooterLogo from './FooterLogo'
import FooterEndLink from './FooterEndLink'
import FooterEndSocial from './FooterEndSocial'
import Logo from './Logo'
import FooterSecondContainer from './FooterSecondContainer'

const FooterEndContainer = () => {
  return (
    <div className='footer_end_container container'>
      
      <FooterLogo />
      {/* <Logo/> */}
      <FooterSecondContainer/>


      
      <FooterEndLink />
      <FooterEndSocial />
    </div>
  )
}

export default FooterEndContainer