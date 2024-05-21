import {createSlice} from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        currentUser: null
    },
    
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setCurrentUser: (state, action) => {
            delete action.payload.password;
            state.currentUser = action.payload;
        }
    }
})

export const {setToken, setCurrentUser} = authSlice.actions;

export default authSlice.reducer;