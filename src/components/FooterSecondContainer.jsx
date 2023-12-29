import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchList, getSettingsList } from '../actions/MainAction';
import FooterSecondCard from './FooterSecondCard';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const FooterSecondContainer = () => {
    const dispatch = useDispatch();
    const { branchListArr, settingsListArr } = useSelector(state => state.Data);


    console.log(branchListArr);


    useEffect(() => {
        dispatch(getBranchList())
        dispatch(getSettingsList())
    }, [dispatch])



    return (
        
          
            <div className="footer_second_cards">
                {
                    [...branchListArr]?.reverse().map((data, i) => {
                        return data.is_active ? <FooterSecondCard key={i} data={data} /> : null
                    })
                }

            </div>

        
    )
}

export default FooterSecondContainer