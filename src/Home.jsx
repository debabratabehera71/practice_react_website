import React from 'react';
import Common from './Common';
import web from '../src/images/logo1.svg'
const Home = () => {
    return(
        <>
           <Common  
                name='Get Started with Us' 
                imgsrc={web} 
                visit='/service' 
                btname='Get Started'
            />
        </>
    )
}

export default Home;