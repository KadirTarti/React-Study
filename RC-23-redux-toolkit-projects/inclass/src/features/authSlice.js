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

//?Slice yapısı ile Action’lar otomatik olarak oluşturuluyor. olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const {loginSuccess,logoutSuccess} = authSlice.actions;

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer;