import React from 'react'

const ExamSearch = ({ name }) => {
    return (
        <div className="search">
            <h2>{name}</h2>
            <div className="search_input">
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default ExamSearch