import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterLogoImg from '../images/logo_footer.png'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import DOMPurify from 'dompurify';


const FooterLogo = () => {

  const dispatch = useDispatch();
  const { settingsListArr } = useSelector(state => state.Data);


  useEffect(() => {
    dispatch(getSettingsList())
  }, [dispatch])
  return (
    <div>
      <Link to='/panda-school-proje'>
        {
          settingsListArr[0]?.logo_active ?
            <img className='logo' src={settingsListArr[0]?.logo} alt="" />
            : null
        }
      </Link>

      <div className="footer_second_card">
        {/* <h4 className='nav_inner_list'>{
          settingsListArr[0]?.about_page_active ?

            <Link to='/haqqimizda'>Haqqımızda</Link>
            : null
        }</h4> */}
        <p>{DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '').length ? `${DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '').substring(0, 200)}...` : DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '')}</p>
        <div className='header_middle_container_content footer_second_btn'>
          <Link to="/haqqimizda"><button><span>Read More</span></button></Link>
        </div>
      </div>
    </div>



  )
}

export default FooterLogo