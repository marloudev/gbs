import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: '',
        data:[]
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
    },
})
export const {
    setSearch,
    setData
} = searchSlice.actions

export default searchSlice.reducer
