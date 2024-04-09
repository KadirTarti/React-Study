import { createSlice } from '@reduxjs/toolkit';

const myState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: myState,
    reducers: {
        loginSuccess: (state, action) => {
            // Redux Toolkit, redüktörlerde "mutasyona uğrayan" mantık yazmamızı sağlar.
            // Immer kütüphanesini kullandığı için aslında durumu değiştirmez,
            // "taslak durum"daki değişiklikleri tespit eder ve bu değişikliklere dayalı olarak yepyeni bir değişmez durum üretir
            state.user = action.payload
          },
          logoutSuccess: (state) => {
            state.user = null
            // veya sadece initialState yazabilirdik
          },
    }

})

export const {loginSuccess, logoutSuccess} = authSlice.actions;

export default authSlice.reducer;
