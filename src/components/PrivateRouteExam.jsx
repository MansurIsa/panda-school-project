import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRouteExam = ({Element }) => {
    const isExamLoggedIn = localStorage.getItem('ACCESS_TOKEN_EXAM');

    return isExamLoggedIn ? (
      <Element />
    ) : (
      <Navigate to="/online-exam-login" />
    );
}

export default PrivateRouteExam