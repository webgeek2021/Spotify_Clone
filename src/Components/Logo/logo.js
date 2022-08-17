import React from 'react'
import { BsSpotify } from 'react-icons/bs';
import './logo.css'
function Logo(){
    return(
        <div className='logo'>
            <div className='logo-img'><BsSpotify/></div>
            <div className='title'>Spotify</div>
        </div>
    )
}

export default Logo;