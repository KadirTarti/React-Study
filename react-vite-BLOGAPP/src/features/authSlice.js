import {createSlice} from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    },
    
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const {setToken} = authSlice.actions;

export default authSlice.reducer;
