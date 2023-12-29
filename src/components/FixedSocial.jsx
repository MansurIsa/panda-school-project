import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { whatsappFixedIcon } from '../redux/MainReducer'


const FixedSocial = () => {
  const dispatch=useDispatch()



  return (

    
      <div className='fixed_social'>
        <div>
          <Link to="https://www.facebook.com"><BsFacebook className='fixed_social_icon' /></Link></div>
        <div>
          <Link to="https://www.instagram.com"><BsInstagram className='fixed_social_icon' /></Link></div>
        <div>
          <Link to="https://www.youtube.com"><BsYoutube className='fixed_social_icon' /></Link></div>
        <div onClick={()=>dispatch(whatsappFixedIcon())}>
          <Link ><BsWhatsapp className='fixed_social_icon' /></Link></div>
      </div>
    

  )
}

export default FixedSocial