// import { useState } from "react"

// const [count, setCount] = useState()

const initialState = {
    count: 0,
    // title: "",
}

//* action bir obje olmak zorunda

//! reducer fonk her zaman MUTLAKA BİR OBJE döndürmek ZORUNDA !!!

// action parametresinde type ve payload verileri olmak zorunda. type ne olacağını söyleyen bilgi.. payload ise eklenecek veri

export const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case "INC":
            return {count: state.count + 1}
        case "DEC":
            return {count: state.count - 1}
        case "RESET":
            //return initialState - tek state böyle döndürülebilir. ama birden fazla state olursa aşağıdaki gibi:
            return {...state, count: 0}
    
        default:
            return state
    }
}