import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    categories:[],
    brands: [],
    firms: [],
    products: [],
    purchases: [],
    sales: [],
    loading: false,
    error: false
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // firmsSuccess: (state, {payload}) => {
    //   state.loading = false;
    //   state.firms = payload; 
    // },

    // brandsSuccess: (state, {payload}) => {
    //     state.loading = false;
    //     state.brands = payload;
    //   },

    // getSuccess: (state, {payload}) => {
    //     console.log(payload);
    //     state.loading = false;
    //     state[payload.url] = payload.data;
    //  },
//desc edilmiş hali :
      getSuccess: (state, {payload: {data,url}}) => {
        state.loading = false;
        state[url] = data;
      },
    
      getProCatBrandSuccess : (state, {payload}) => {
        state.loading= false;
        state.products = payload[0];
        state.categories = payload[1];
        state.brands = payload[2];
      },
    
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
//   firmsSuccess,
//   brandsSuccess,
  getSuccess,
  fetchFail,
  getProCatBrandSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;