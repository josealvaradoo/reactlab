import React from 'react';
import Course from './Course';

function Courses() {
    console.log(localStorage.getItem('token'))
    return (
        <div className="ed-container ed-fluid margin-top--2">
            <div className="ed-item m-30">
                <Course />
            </div>
            <div className="ed-item m-30">
                <Course />
            </div>
        </div>
    )
}

export default Courses
