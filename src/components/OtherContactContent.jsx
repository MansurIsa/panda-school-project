import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { PiPhoneLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import { AiOutlineYoutube } from "react-icons/ai";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoFacebook } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { getBranchList, getSettingsList } from '../actions/MainAction'

const OtherContactContent = () => {

    const dispatch = useDispatch();
    const { branchListArr } = useSelector(state => state.Data);


    console.log(branchListArr);


    useEffect(() => {
        dispatch(getBranchList())
        dispatch(getSettingsList())
    }, [dispatch])
    return (
        <div className="other_contact_content">
            <div className="footer_second_cards">
                {
                    [...branchListArr]?.reverse().map((data, i) => {
                        return data.is_active ?
                            <div key={i} className="footer_second_card">
                                <h4>{data.name}</h4>
                                <div className="footer_second_card_content">
                                    <BsLink45Deg className="footer_second_card_link" />
                                    <Link target='_blank' to={data.website}>{data.website}</Link>
                                </div>
                                <div className="footer_second_card_content">
                                    <CiMail className="footer_second_card_link" />
                                    <Link target='_blank' to={data.email}>{data.email}</Link>
                                </div>
                                <div className="footer_second_card_content">
                                    <PiPhoneLight className="footer_second_card_link" />
                                    {
                                        data?.contact_numbers?.map((contact, i) => {
                                            return <Link target='_blank' to={`tel: ${contact.phone_number}`}> {contact.phone_number}</Link>
                                        })
                                    }

                                </div>
                                <div className="footer_second_card_content">
                                    <AiOutlineHome className="footer_second_card_link" />
                                    <p>{data.address}</p>
                                </div>
                                {/* <div className="footer_second_card_map">
                                    <iframe title='location' src={data.map_url} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div> */}
                            </div>
                            : null
                    })
                }

            </div>
            <ul className='header_second_list'>


                <li>
                    <Link to={''}><BiLogoFacebook  /></Link>
                </li>
                <li>
                    <Link to={''}><LiaInstagram  /></Link>
                </li>
                <li>
                    <Link to={''}><LiaLinkedinIn  /></Link>
                </li>
                <li>
                    <Link to={''}><AiOutlineYoutube  /></Link>
                </li>
            </ul>
        </div>
    )
}

export default OtherContactContent