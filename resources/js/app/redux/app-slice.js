import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    pathname:'/'+window.location.pathname.split("/")[2],
    value: 0,
    meridiem:moment().format('A'),
    isModalOpen: false,
    branches:[],
    recipes:[],
    breads:[],
    toastStatus:{
      status:'waiting',
      message:''
    },
    user:{},
    notification:{
      open:true,
      type:'',
      message:''
    }
  },
  reducers: {
    setPathname: (state, action) => {
      state.pathname = action.payload
    },
    setNotification: (state, action) => {
      state.notification = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setBranches: (state, action) => {
      state.branches = action.payload
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload
    },
    setBreads: (state, action) => {
      state.breads = action.payload
    },
    setToastStatus: (state, action) => {
      state.toastStatus = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { 
  setPathname,
  setNotification,
  incrementByAmount, 
  setIsModalOpen,
  setBranches,
  setBreads,
  setToastStatus,
  setRecipes,
  setUser,
 } = appSlice.actions

export default appSlice.reducer
