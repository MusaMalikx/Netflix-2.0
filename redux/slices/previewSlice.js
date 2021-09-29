import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
    name: 'preview',
    initialState: {
        item: {},
        type: ""
    },
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { setItem, setType } = previewSlice.actions;
export const selectItem = (state) => state.preview.item;
export const selectType = (state) => state.preview.type;

export default previewSlice.reducer;
