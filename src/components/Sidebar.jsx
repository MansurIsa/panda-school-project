import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import ExamImg from "../images/exam.png"
import ExamResultImg from "../images/exam (1).png"
import DashboardImg from "../images/dashboard.png"
import EditSetting from "../images/user.png"
import LogOut from "../images/logout.png"

const Sidebar = ({examsUserObj}) => {
    const navigate=useNavigate()
    const logOut=()=>{
        navigate("/online-exam-login")
        localStorage.removeItem('ACCESS_TOKEN_EXAM')
        localStorage.removeItem('onlineExamUser')
    }
    return (
        <div className="sidebar">
            <div className="student">
                <h2>{examsUserObj.name} {examsUserObj.surname}</h2>
                <p>{(examsUserObj.is_superuser === true) ? 'Admin' : 'student'}</p>
                <FaUser className='exam_user_icon'/>
            </div>
            <ul className='sidebar_list'>
                <li><Link to='/dashboard'><img src={DashboardImg} alt="" /> Dashboard</Link></li>
                <li><Link to='/exams'><img src={ExamImg} alt="" /> Exams</Link></li>
                <li><Link to='/exam-results'><img src={ExamResultImg} alt="" /> Exam Results</Link></li>
                
            </ul>
            <button className="edit_btn"><img src={EditSetting} alt="" /> Edit Setting</button>
            <button onClick={logOut}  className="log_out"><img src={LogOut} alt="" /> Log Out</button>
        </div>
    )
}

export default Sidebar