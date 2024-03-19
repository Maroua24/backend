import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import {clientlist} from './data'

const clientSlice = createSlice({
    name:"Client",
    initialState: clientlist,
    reducers: {
        addClient:(state,action) => {
            state.push(action.payload)
        }
    }
})
export const {addClient} = clientSlice.actions;
export default clientSlice.reducer;