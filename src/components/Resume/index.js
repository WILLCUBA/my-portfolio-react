import React from 'react';
import {motion} from 'framer-motion'

const Resume = function () {
        return (
            <motion.div
            initial={{width:0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth}}>
                <h1>Resume</h1>
            </motion.div>
        )
}

export default Resume;