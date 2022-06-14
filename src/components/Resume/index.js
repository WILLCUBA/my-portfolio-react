import React from 'react';

const Resume = function (props) {
    const {currentItem} = props
    if (currentItem === "Resume"){
        return (
            <h1>Resume</h1>
        )
    }
}

export default Resume;