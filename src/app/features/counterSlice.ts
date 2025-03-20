import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    counters: {
        id: number;
        website: string;
        icon: string;
        target: number;
        current: number;
    }[];
}

const initialState: InitialState = {
    counters: [
        {id: 1, website: "facebook", icon: "fab fa-facebook", target: 12000, current: 0},
        {id: 2, website: "twitter", icon: "fab fa-twitter", target: 5000, current: 0},
        {id: 3, website: "Youtube", icon: "fab fa-youtube", target: 7500, current: 0},
        {id: 4, website: "instagram", icon: "fab fa-instagram", target: 1200, current: 0},
    ]
}

const counterSlice  = createSlice({
    name:"counter",
    initialState,
    reducers: {
       updateCounter: (state, action: PayloadAction<{ id: number}>) => { 
            const counter = state.counters.find((inx) => inx.id === action.payload.id )
            const increment = counter ? (counter.target) / 200 : 0;
            if(counter && counter.current < counter.target) {
                counter.current = Math.min( counter.current + Math.ceil(increment) , counter.target)
            }
       } 
    }
})

export const {updateCounter} = counterSlice.actions

export default counterSlice.reducer