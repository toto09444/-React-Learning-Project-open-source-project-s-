///////////////////// Redux Test  2  MINI CALCULE////////////////////
import { createStore } from 'redux';

const initialeState = { operation: '', resultats: '' }
const reducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case 'SOMME':
            return { resultats: Number(payload[0]) + Number(payload[1]), operation: payload[0] + "+" + payload[1] }
        case 'SOUSTRA':
            return { resultats: Number(payload[0]) - Number(payload[1]), operation: payload[0] + "-" + payload[1] }

        case 'MULTIP':
            return { resultats: Number(payload[0]) * Number(payload[1]), operation: payload[0] + "*" + payload[1] }

        case 'DIVIS':
            return { resultats: Number(payload[0]) / Number(payload[1]), operation: payload[0] + "%" + payload[1] }

    }
    return state
}

const store = createStore(reducer)

export default store

















///////////////////// Redux Test  1 ////////////////////
/*
import { createStore } from "redux";
const initialState={counter :0};
const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case 'INC' :
         return {counter : state.counter+1}
        case 'DEC' :
         return {counter : state.counter-1}
        case 'ADDN' :
            return {counter :state.counter +Number(payload)}
        default :
         return state
    }
 

   
}
const store =createStore(reducer)

export default store


*/








