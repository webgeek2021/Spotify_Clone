import React from 'react'
import './player.css' 
import {setcolor} from '../../store/slices/slice.js'
import { useDispatch } from 'react-redux';
const dominantColors = require('dominant-colors');

function PlayerDetails(props) {

    const dispatch = useDispatch();

 dominantColors.showColors(props.coverphoto,1)
  .then(colors => {
    dispatch(setcolor(colors))
  })
  .catch(error => {
    dispatch(setcolor(""))
    console.log(error)
  });
      
    return (
        <div className="playerDetails" >
            <div className='song-details'>
                <div className="current-song-album">{props.trackName.split('(')[0]}</div>
                <div className='current-song-title'>{props.albumName.split('(')[0]}</div>
            </div>
            
            <img src={props.coverphoto} className="song_img"/>       
        </div>
    )
}

export default PlayerDetails;