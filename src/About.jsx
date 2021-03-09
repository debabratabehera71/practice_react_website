import React from 'react';
import Common from './Common';
import web from '../src/images/logo1.svg'
const About = () => {
    return(
        <>
           <Common  
                name='Welcome to About Page' 
                imgsrc={web} 
                visit='/contact' 
                btname='Contact Now'
            />
        </>
    )
}

export default About;