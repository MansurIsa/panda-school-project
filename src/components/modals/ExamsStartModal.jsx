import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExamQuestions } from '../../actions/MainAction';

const ExamsStartModal = () => {
    const dispatch = useDispatch();
    const { examQuestions, exam, examDuration } = useSelector(state => state.Data);

    const [seconds, setSeconds] = useState(2 * 3600);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        // Temizlik fonksiyonu: bileşen ayrıldığında timer'ı temizle
        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    console.log(examDuration);
    useEffect(() => {
        dispatch(getExamQuestions(exam?.id));
    }, [dispatch]);

    const [variantBgArray, setVariantBgArray] = useState([]);

    const examAnswerVariantHandle = (questionIndex, answerIndex) => {
        const updatedVariantBgArray = [...variantBgArray];

        // Eğer aynı sorunun aynı cevabına tıklanırsa rengi kaldır
        if (updatedVariantBgArray[questionIndex] === answerIndex) {
            updatedVariantBgArray[questionIndex] = null;
        } else {
            updatedVariantBgArray[questionIndex] = answerIndex;
        }

        setVariantBgArray(updatedVariantBgArray);
    };


    console.log(variantBgArray);
    return (
        <div className="modal_container">
            <div className="branch_create_modal_card exams_modal_card">
                <p className='exam_timer'>{`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</p>
                <div className="branch_update_modal_container">
                    {examQuestions?.map((questionData, questionIndex) => (
                        <div key={questionIndex} className='exams_questions_container'>
                            <div className='exams_questions'>
                                <span>{questionData.number}.</span>
                                <p>{questionData.question}</p>
                            </div>
                            {questionData.question_image !== null ? (
                                <div className='exams_questions_image'>
                                    <img src={questionData.question_image} alt="" />
                                </div>
                            ) : null}
                            <div className='exams_answers_container'>
                                {questionData?.answers?.map((answerData, answerIndex) => (
                                    <div key={answerIndex}>
                                        <span
                                            style={{
                                                backgroundColor: variantBgArray[questionIndex] === answerIndex ? "orange" : "white"
                                            }}
                                            onClick={() => examAnswerVariantHandle(questionIndex, answerIndex)}>
                                            {answerData.variant})
                                        </span>
                                        {answerData.answer_image === null ? (
                                            <p>{answerData.answer}</p>
                                        ) : (
                                            <img src={answerData.answer_image} alt="" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button className='exams_complated_button'>İmtahanı bitir</button>
                </div>
            </div>
        </div>
    );
}

export default ExamsStartModal;
