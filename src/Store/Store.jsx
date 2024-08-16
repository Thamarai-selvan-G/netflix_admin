import { createSlice,configureStore } from "@reduxjs/toolkit";

let mySlice = createSlice({
    name : 'reduxStore',

    initialState:{
        updateData :"",
    },

    reducers:{
        updateDataId(store,action){
            store.updateData = action.payload
        }
    }

})

export let  myReducer = mySlice.actions

let Store = configureStore(mySlice)

export default Store