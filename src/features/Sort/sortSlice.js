import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    defult:'',
    value:''
}

const sortSlice = createSlice({
    name:'sort',
    initialState,
    reducers:{
        sortValues:(state,action)=>{
            state.value=action.payload
        },
        
    }
})


    

export default sortSlice.reducer
export const {sortValues} = sortSlice.actions