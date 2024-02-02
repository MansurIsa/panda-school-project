import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ExamLogo from '../components/ExamLogo'
import ExamSearch from '../components/ExamSearch'
import { useDispatch, useSelector } from 'react-redux'
import { getExamUserObj } from '../actions/MainAction'

const ExamResults = () => {
    const dispatch=useDispatch()
    const {examsUserObj}=useSelector(state=>state.Data)

    useEffect(()=>{
        dispatch(getExamUserObj(localStorage.getItem("onlineExamUser")))
    },[dispatch])
    return (
        <div className='dashboard'>
            <Sidebar examsUserObj={examsUserObj}/>
            <div className="dashboard_container">
                <div className="dashboard_main">
                    <ExamLogo />
                    <ExamSearch name="Exam Results" />

                </div>

            </div>
        </div>
    )
}

export default ExamResults