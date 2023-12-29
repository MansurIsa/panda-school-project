import React from 'react'
import HeaderHead from './HeaderHead'
import OtherHeaderMainContainer from './OtherHeaderMainContainer'
import OtherHeaderPagesLink from './OtherHeaderPagesLink'
import FixedSocial from './FixedSocial'
import WhatsappMessage from './WhatsappMessage'
import { useSelector } from 'react-redux'
import FixedSocialContainer from './FixedSocialContainer'

const OtherHeader = ({otherHeaderMainContent,otherHeaderPagesLink,otherPageBanner}) => {

  const {whatsappChat,fixedSocialIcons}=useSelector(state=>state.Data)
  return (
    <header>
        <HeaderHead/>
        <OtherHeaderMainContainer otherPageBanner={otherPageBanner} otherHeaderMainContent={otherHeaderMainContent}/>
        <OtherHeaderPagesLink otherHeaderPagesLink={otherHeaderPagesLink}/>
        {/* <FixedSocial/> */}
        <FixedSocialContainer />
      {whatsappChat && <WhatsappMessage/>}
      {fixedSocialIcons && <FixedSocial />}
      </header>
  )
}

export default OtherHeader