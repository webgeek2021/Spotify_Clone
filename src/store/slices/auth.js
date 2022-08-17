import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token:"",
    timeout:0
  },
  reducers: {
    setToken : (state,action)=>{
        console.log("ACTION")
        console.log(action.payload)
        state.token = action.payload.token
    },
    setExpenseTime: (state,action)=>{
        console.log("TIME")
        console.log(action.payload)
        state.timeout = action.payload.timeout
    }

  },
})

// Action creators are generated for each case reducer function
export const { setToken , setExpenseTime } = authSlice.actions

export default authSlice.reducer