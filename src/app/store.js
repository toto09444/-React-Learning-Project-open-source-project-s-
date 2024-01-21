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

















///////////////// Methode 2

/* import { createStore } from "redux";

const initialState = {};
const traitement='INCREMENT';
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case traitement:
    return { ...state, ...payload }

  default:
    return state
  }
};

const store =createStore(reducer)

export default store
*/
