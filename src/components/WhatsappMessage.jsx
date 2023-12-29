import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { whatsappCloseIcon } from '../redux/MainReducer';


const WhatsappMessage = () => {


    const dispatch = useDispatch();
    const settingsListArr = useSelector(state => state.Data.settingsListArr);

    const [sendWpMessage,setSendWpMessage]=useState("")

    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])



    const sendWpMessageChange=(e)=>{
        setSendWpMessage(e.target.value)
    }


    return (

        <div className='whatsapp_container'>
            <div className="whatsapp_close">
                <IoClose onClick={()=>dispatch(whatsappCloseIcon())} className='whatsapp_close_icon' />
            </div>
            <div className="whatsapp_header">
                {
                    settingsListArr[0]?.logo_active ?
                        <img className='logo' src={settingsListArr[0]?.logo} alt="" />
                        : null
                }
                <div className="whatsapp_header_banner">
                    <h2>Panda School</h2>
                    <p>aktiv</p>
                </div>


            </div>
            <div className="whatsapp_body">
                <div className="whatsapp_body_message">
                    <p>Salam 👋 Sizə necə kömək edə bilərik?</p>
                </div>
            </div>
            <div className="whatsapp_footer">
                <input type="text" value={sendWpMessage} onChange={sendWpMessageChange}/>
                <Link target='_blank' to={`https://wa.me/+994516971835?text=${encodeURIComponent(sendWpMessage)}`}><IoIosSend className='fixed_social_icon' /></Link>
            </div>
        </div>


    )
}

export default WhatsappMessage