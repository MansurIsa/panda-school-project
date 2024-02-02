import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExams } from '../actions/MainAction'
import DashboardMainCard from './DashboardMainCard'

const DashboardMain = () => {

    const dispatch = useDispatch()
    const { exams } = useSelector(state => state.Data)

    useEffect(() => {
        dispatch(getExams())
    }, [dispatch])


    console.log(exams);

    return (
        <div className="exams_container">

            <div className="exams_cards">
                {
                    exams?.map((data, i) => {
                        return <DashboardMainCard key={i} data={data} />
                    })
                }
            </div>


        </div>
    )
}

export default DashboardMain