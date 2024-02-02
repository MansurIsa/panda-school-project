import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExams } from '../actions/MainAction'
import ExamsMainCard from './ExamsMainCard'
import ExamsStartModal from './modals/ExamsStartModal'

const ExamsMain = () => {

    const dispatch = useDispatch()
    const { exams,examsModal } = useSelector(state => state.Data)

    useEffect(() => {
        dispatch(getExams())
    }, [dispatch])


    console.log(exams.filter(data=>data.is_active===true));
    return (
        <div className="exams_container">

            <div className="exams_cards">
                {
                    exams?.filter(data=>data.is_active===true)?.map((data, i) => {
                        return <ExamsMainCard key={i} data={data} />
                    })
                }
            </div>

            {examsModal && <ExamsStartModal/>}


        </div>
    )
}

export default ExamsMain