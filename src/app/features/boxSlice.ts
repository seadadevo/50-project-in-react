import { createSlice } from "@reduxjs/toolkit"
interface InitialState {
    big: boolean
}
export interface RootState {
    box: InitialState
}
const initialState = {
     big: true
}

const boxSlice = createSlice({
    name: "box",
    initialState,
    reducers: {
        toggleSize: (state) => {
            state.big = !state.big;
        }
    }
})

export const { toggleSize } = boxSlice.actions;
export default boxSlice.reducer;