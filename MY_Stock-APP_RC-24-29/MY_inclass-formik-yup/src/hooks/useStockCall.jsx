import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess, 
    // firmsSuccess 
} from "../features/stockSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

//   const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(`${BASE_URL}firms`, {
//         headers: {
//           Authorization: `Token ${token}`,
//           // Authorization: `Bearer ${accesstoken}` //* jwt için
//         },
//       });
//       console.log(data);
//       dispatch(firmsSuccess({data:data.data, url:'firms'}));
//     } catch (error) {
//       console.log(error);
//       dispatch(fetchFail());
//     }
//   };

//   const getBrands = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(`${BASE_URL}brands`, {
//         headers: {
//           Authorization: `Token ${token}`,
//           // Authorization: `Bearer ${accesstoken}` //* jwt için
//         },
//       });
//       console.log(data);
//       dispatch(getSuccess({data:data.data, url:'brands'}));
//     } catch (error) {
//       console.log(error);
//       dispatch(fetchFail());
//     }
//   };

//! DRY !
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
          // Authorization: `Bearer ${accesstoken}` //* jwt için
        },
      });
      console.log(data);
      dispatch(getSuccess({data:data.data, url:url}));//action creatırlar her zaman bir parametre kabul ederler
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };



  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}${url}/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      getStockData(url)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };




  return {
    // getFirms, getBrands,
     getStockData, 
    //  getSuccess, 
     deleteStockData};
};

export default useStockCall;
