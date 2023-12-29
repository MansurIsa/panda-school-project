import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import DOMPurify from 'dompurify';
import AboutImg from "../images/about.png"

const AboutContainer = () => {
  const dispatch = useDispatch();
  const settingsListArr = useSelector(state => state.Data.settingsListArr);


  useEffect(() => {
    dispatch(getSettingsList())
  }, [dispatch])
  return (
    <div className='about_container'>
      {
        settingsListArr[0]?.about_active ?
          <div className="about_bg_shadov container">
            <div className="about_content">
              <div className="about_content_card">
                <h3>PandaSchoola Xoş gəlmisiniz!</h3>

                <p>{DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '')}</p>
                <span style={{
                  position: "absolute",
                  borderRadius: "100vmax"
                }} class="top"></span>
                <span style={{
                  position: "absolute",
                  borderRadius: "100vmax"
                }} class="right"></span>
                <span style={{
                  position: "absolute",
                  borderRadius: "100vmax"
                }} class="bottom"></span>
                <span style={{
                  position: "absolute",
                  borderRadius: "100vmax"
                }} class="left"></span>
              </div>

            </div>
            <div className="about_image">
              <img src={AboutImg} alt="" />
            </div>
          </div> : null
      }


    </div>
  )
}

export default AboutContainer