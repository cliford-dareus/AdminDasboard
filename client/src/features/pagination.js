import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        start : 0,
        end : 20,
        page: 1
    }
};

const paginateSlice = createSlice({
    name: 'paginate',
    initialState,
    reducers: {
        increment: (state) => {
            { state.value.start += 20, state.value.end+= 20, state.value.page++ }
        },
        decrement: (state) => {
            if(state.value.start === 0) return;
            { state.value.start -= 20, state.value.end-= 20, state.value.page-- }
        }
    }
});

export const { increment, decrement } = paginateSlice.actions;
export default paginateSlice.reducer;
