import React from 'react'
import './songlist.css'
import {IoSearchSharp} from 'react-icons/io5'
import {useSelector , useDispatch} from 'react-redux';

import {setCurrentTrackIndex, setPlayListId, setTrackList , setCurrentTrack,setPlaying} from '../../store/slices/slice.js'

import SongCard from '../songCard/songcard'

function SongsList(){
  
    const dispatch = useDispatch();
    const [searchbar,setsearchbar] = React.useState("");
    const currentTrackIndex = useSelector((state)=>state.song.currentTrackIndex)
    const tracks = useSelector((state)=>state.song.trackList)
    const handleChange = (e)=>{
        setsearchbar(e.target.value)
    }
    const handleClick = (index)=>{
        console.log(index)
        dispatch(setCurrentTrack(tracks[index].track))
        dispatch(setCurrentTrackIndex(index))   
    }
    const List =tracks.map((track,index)=>{

        return (
            
            <SongCard 
                key={index}
                track={track.track}
                active={index === currentTrackIndex ? true : false}
                handleClick={()=>handleClick(index)}
            />
            
        )
    })

    return(
        <div className='songs-list'>
            <div className='section_name'>For You</div>
            <div className='search-bar'>
                <input type="text" placeholder="Search Song , Artists" value={searchbar} onChange={handleChange}/>
                <IoSearchSharp  className="search-icon"/>
            </div>
            <div className='songs-lists-arr'>
                {List}
            </div>
        </div>
    )
}

export default SongsList;