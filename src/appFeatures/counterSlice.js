import { createSlice } from "@reduxjs/toolkit";

// const initialState= {
//     counterVal: 0,
//     privacy: false,
// }

const counterSlice= createSlice({
    name: "counter",
    initialState: {counterVal: 0 },
    reducers: {
        increment: (state)=> {
            state.counterVal++

        },
        decrement: (state)=> {
            state.counterVal--

        },
        add: (state, action)=> {
            state.counterVal = state.counterVal + Number(action.payload.num)

        },
        subtract: (state, action)=> {
            state.counterVal -= Number(action.payload)

        },
    }
})

// firstly we have to export our individually reducers
export const {increment, decrement, add, subtract} = counterSlice.actions;

//secondly we have to export our combine reducer
export default counterSlice.reducer;