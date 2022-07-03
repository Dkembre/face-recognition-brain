import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './logo.css';
 
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className="tilty br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="tilty-inner pa4 "><img style={{paddingTop:'10px'}} alt="brain" src={brain}/> </div>
            </Tilty>
        </div>
    )
}


export default Logo;