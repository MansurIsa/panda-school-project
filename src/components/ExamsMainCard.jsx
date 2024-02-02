import React from 'react'
import { useDispatch } from 'react-redux'
import { examsStartModalFunc } from '../redux/MainReducer'

const ExamsMainCard = ({ data }) => {

    const dispatch=useDispatch()
    return (
        <div className="exams_card">
            <span className='exams_card_head'>{data.is_active ? "Active" : "Deactive"}</span>
            <div className="exams_card_content">
                <p>Exam Name: <span>{data.exam_name}</span></p>
                <p>Date: <time>{data.exam_date}</time></p>
                <p>Time: <time>{data.exam_time}</time></p>
                <button onClick={()=>dispatch(examsStartModalFunc(data))}>Start</button>
            </div>
        </div>
    )
}

export default ExamsMainCard