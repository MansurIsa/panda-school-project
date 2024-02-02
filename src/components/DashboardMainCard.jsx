import React from 'react'

const DashboardMainCard = ({ data }) => {
    return (

        <div className="exams_card">
            <span   className='exams_card_head'>{data.is_active ? "Active" : "Deactive"}</span>
            <div className="exams_card_content">
                <p>Exam Name: <span>{data.exam_name}</span></p>
                <p>Date: <time>{data.exam_date}</time></p>
                <p>Time: <time>{data.exam_time}</time></p>
               
            </div>
        </div>

    )
}

export default DashboardMainCard