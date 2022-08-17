import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaForward , FaBackward }from 'react-icons/fa'
import {BsPlayCircle  , BsFillVolumeUpFill} from 'react-icons/bs'
import {IoPause , IoPlay} from 'react-icons/io5'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import './player.css'

function PlayerControls(props){

    return(
        <div className='player-control'>

            <ProgressBar now={props.trackProgress}  className='progressBar' variant='white' />

            <div className="control-section">
            <div className="menu-btn"><HiOutlineDotsHorizontal /></div>
            <div className='controls'>
                <FaBackward className="backward" onClick={props.handlePrevSong}/>
                
                <div className='playpause'>
                {props.isplaying ? 
                <IoPause className='pause' onClick={props.handlePausePlay}/>:<IoPlay className='play' onClick={props.handlePausePlay}/> 
                }
                </div>
                <FaForward className='forward' onClick={props.handleNext}/>
            </div>
            <div  className='menu-btn'><BsFillVolumeUpFill/></div>
            </div>
        </div>
    )
}

export default PlayerControls;

