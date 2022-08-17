import React from 'react'
import PlayerControls from './playerControl';
import PlayerDetails from './PlayerDetail';

import {useSelector,useDispatch} from 'react-redux';
import { setaudio, setPlayListId ,setCurrentTrack,setCurrentTrackIndex,handleprev,setPlaying} from '../../store/slices/slice';
import {Container} from 'react-bootstrap'

function PlayerPanel(){
  const dispatch = useDispatch()
  
  const isplaying = useSelector((state)=>state.song.isplaying)
  const currentIndexPlaying = useSelector((state)=>state.song.currentTrackIndex)
  const currentlyPlaying = useSelector((state)=>state.song.currentTrack)
  const trackList = useSelector((state)=>state.song.trackList)
  const audioRef = React.useRef(new Audio(currentlyPlaying.preview_url))
  const intervalRef = React.useRef()

  const handleNext = ()=>{
    dispatch(setCurrentTrackIndex());
  }
  const handlePrevSong = ()=>{
    dispatch(handleprev())
    }
    const handlePausePlay = ()=>{
        if(isplaying)
        {
            dispatch(setPlaying(false))
        }
        else{
            dispatch(setPlaying(true))
        }
    }

    React.useEffect(()=>{
        if(trackList.length > 0 ){
        dispatch(setCurrentTrack(trackList[currentIndexPlaying].track))
          audioRef.current.pause()
          audioRef.current = new Audio(trackList[currentIndexPlaying].track.preview_url)
          let playPromise =  audioRef.current.play()
          if (playPromise !== undefined) {
            playPromise.then(function() {
            }).catch(function(error) {
              console.log(error)
              // handlePausePlay()
            });
          }
        }
    },[currentIndexPlaying])

    const [trackprogress,settrackprogress] = React.useState(0);
   
    const{ duration } = audioRef.current
    const percentage = duration ? (trackprogress / duration )*100 : 0;

    const startTimer = () => {
        clearInterval(intervalRef.current);
    
        intervalRef.current = setInterval(() => {
          if (audioRef.current.ended) {
            handleNext();
          } else {
            settrackprogress(audioRef.current.currentTime);
          }
        }, [1000]);
    };
    
    React.useEffect(() => {
        if (audioRef.current.src) {
            console.log("ISPLAYING")
            console.log(isplaying)
          if (isplaying) {
            let playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
              playPromise.then(function() {
              }).catch(function(error) {
                console.log(error)
              });
            }
            startTimer();
          } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
          }
        } 
        else {
          if (isplaying) {
            audioRef.current= new Audio(currentlyPlaying.preview_url);
            let playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
              playPromise.then(function() {
              }).catch(function(error) {
                console.log(error)
              });
            }
            startTimer();
          } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
          }
        }
      }, [isplaying]);

    return(
        <Container fluid>
        <div className='playerPanel'>
            {currentlyPlaying != "" && <PlayerDetails
              trackName={currentlyPlaying.name}
              albumName={currentlyPlaying.album.name}
              coverphoto={currentlyPlaying.album.images[1].url}
            />}
            {currentlyPlaying != "" && <PlayerControls
                trackProgress={percentage}
                handleNext={handleNext}
                isplaying={isplaying}
                handlePausePlay={handlePausePlay}
                handlePrevSong={handlePrevSong}
            />}
        </div>
        </Container>
    )
}

export default PlayerPanel;