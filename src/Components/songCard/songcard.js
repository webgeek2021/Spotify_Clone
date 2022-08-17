import React from 'react'
import {Container} from 'react-bootstrap'
import './songcard.css'
function SongCard(props){
  
    
    const style = {
        backgroundColor : props.active ? "black" : "" ,
        opacity: props.active ? "0.6" : "1"
    }
    
    return(
        <div onClick={props.handleClick}>
        <Container fluid className="songCard" style={style} >
            <img src={props.track.album.images[2].url} className="songImg"/>
            <div className="song-info">
                <div className="track-name">{props.track.name.split('(')[0]}</div>
                <div className="album-name">{props.track.album.name.split('(')[0]}</div>
            </div>
            <div className='song-duration'>{(props.track.duration_ms/60000).toFixed(2)}</div>
        </Container>
        </div>
    )
}

export default SongCard;