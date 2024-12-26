import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice({
    name:"obj",
    initialState:{ object:[
                { id: 1, name: 'Apple', category: 'Fruit' },
                { id: 2, name: 'Carrot', category: 'Vegetable' },
                { id: 3, name: 'Banana', category: 'Fruit' },
                { id: 4, name: 'Broccoli', category: 'Vegetable' },
                { id: 5, name: 'Strawberry', category: 'Fruit' },
              ]},
              reducers:{}
})
export default dataslice.reducer