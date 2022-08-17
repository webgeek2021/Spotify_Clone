import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Components/Dashboard.js'
import './app.css'
import {useSelector , useDispatch} from 'react-redux';
import Login from './Components/Login/login.js';
import { setClientToken } from './spotify.js';
import { setPlayListId ,setTrackList,setCurrentTrack} from './store/slices/slice.js';
import authClient from './spotify.js'

function App() {
  
  const [token, setToken] = React.useState("");
  
  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  // console.log(token)
  const dispatch = useDispatch();

  React.useEffect(() => {
      authClient.get("me/playlists").then(function (response) {
        console.log("APPPP")
        console.log(response.data.items[1].id);
        dispatch(setPlayListId(response.data.items[1].id));
      });
    }, []);

    
    const currentTrackIndex = useSelector((state)=>state.song.currentTrackIndex)

    const playListId = useSelector((state)=>state.song.playListId);
  
    const setData = (playListId)=>{
        authClient.get(`playlists/${playListId}/tracks`).then(function (response) {
            console.log(response.data.items[0].track.album);
            dispatch(setTrackList(response.data.items));
            dispatch(setCurrentTrack(response.data.items[currentTrackIndex].track))
        });
    }
    React.useEffect(()=>{
        console.log("id:"  , playListId)
        if(playListId)
        {
           setData(playListId)
        }
        
    },[playListId])
    
    const color = useSelector((state)=>state.song.color)
  return (
   
    <div className="app" style={{background: `linear-gradient(90deg, #000000 2.46%, ${color[0]}  99.84%)`}}>
      {!token ? <Login/> :<Dashboard/>}
    </div>
  
 
  );
}

export default App;
