import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        model: 'model',
        year: 'year',
        color: 'color',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, chooseYear, chooseColor } = rootSlice.actions;