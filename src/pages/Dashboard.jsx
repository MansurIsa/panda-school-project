import React, { useEffect } from 'react'
import ExamSearch from '../components/ExamSearch'
import Sidebar from '../components/Sidebar'
import ExamLogo from '../components/ExamLogo'
import { useDispatch, useSelector } from 'react-redux'
import { getExamUserObj } from '../actions/MainAction'
import DashboardMain from '../components/DashboardMain'

const Dashboard = () => {

    const dispatch=useDispatch()
    const {examsUserObj}=useSelector(state=>state.Data)

    useEffect(()=>{
        dispatch(getExamUserObj(localStorage.getItem("onlineExamUser")))
    },[dispatch])

    console.log(examsUserObj);
    return (
        <div className='dashboard'>
            <Sidebar examsUserObj={examsUserObj}/>
            <div className="dashboard_container">
                <div className="dashboard_main">
                    <ExamLogo/>
                    <ExamSearch name="Dashboard" />
                   
                </div>

                <DashboardMain />

            </div>
        </div>
    )
}

export default Dashboard