import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        start : 0,
        end : 22,
        page: 1
    }
};

const paginateSlice = createSlice({
    name: 'paginate',
    initialState,
    reducers: {
        increment: (state) => {
            { state.value.start += 22, state.value.end+= 22, state.value.page++ }
        },
        decrement: (state) => {
            if(state.value.start === 0) return;
            { state.value.start -= 22, state.value.end-= 22, state.value.page-- }
        }
    }
});

export const { increment, decrement } = paginateSlice.actions;
export default paginateSlice.reducer;
