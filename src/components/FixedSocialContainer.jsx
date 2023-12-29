import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import { useDispatch } from 'react-redux'
import { fixedSocialCommonHandle } from '../redux/MainReducer'

const FixedSocialContainer = () => {
    const dispatch=useDispatch()
    return (
        <div className='fixed_social_container' onClick={()=>dispatch(fixedSocialCommonHandle())}>
            <IoChatboxEllipsesOutline className='fixed_social_common_icon' />
            
        </div>
    )
}

export default FixedSocialContainer