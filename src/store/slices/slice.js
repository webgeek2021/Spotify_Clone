import { createSlice } from '@reduxjs/toolkit'

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    playListId:"",
    isplaying:false,
    trackList:[],
    currentTrackIndex: 0,
    currentTrack:[],
    previewUrl:"",
    color:[]
  },
  reducers: {
    setPlayListId: (state,action)=>{
      console.log("PLAYACTION")
      console.log(action.payload)
      state.playListId = action.payload
    },
    setTrackList: (state,action)=>{
      console.log("SONGLIST")
      console.log(action.payload)
      state.trackList = action.payload
    },
    setCurrentTrackIndex:(state,action)=>{
      console.log("Current Song")
      // console.log(action.payload)
     if(action.payload)
     {
       state.currentTrackIndex = action.payload;
     }
     else{
      if(state.currentTrackIndex < state.trackList.length-1)
      {
        state.currentTrackIndex = state.currentTrackIndex + 1;
      }
      else{
        state.currentTrackIndex = 0;
      }
    }
      // state.currentTrackIndex = action.payload
    },
    handleprev:(state)=>{
      console.log("PREV")
      if(state.currentTrackIndex > 0)
      {
        state.currentTrackIndex = state.currentTrackIndex - 1;
      }
      else{
        state.currentTrackIndex = 0;
      }
    },
    setPlaying:(state,action)=>{
      console.log("Playing")
      console.log(state.isplaying)
      if(state.isplaying)
      {
        console.log(false)
        state.isplaying = action.payload ? action.payload : false;
      }
      else{
        console.log(true)
        state.isplaying = action.payload ? action.payload : true;
      }
    },
    setCurrentTrack:(state,action)=>{
      console.log("Current Track")
      console.log(action.payload)
      state.currentTrack = action.payload
    },
    setcolor:(state,action)=>{
      state.color = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setPlayListId , setCurrentTrack,setPlaying , setTrackList , setCurrentTrackIndex , handleprev , setcolor} = songSlice.actions

export default songSlice.reducer