import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import { Link } from 'react-router-dom';

const ExamLogo = () => {
    const dispatch = useDispatch();
    const { settingsListArr } = useSelector(state => state.Data);


    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])
    return (
        <div className="main_header">
            <Link to='/dashboard'>
                {
                    settingsListArr[0]?.logo_active ?
                        <img className='logo' src={settingsListArr[0]?.logo} alt="" />
                        : null
                }
            </Link>
           
        </div>
    )
}

export default ExamLogo