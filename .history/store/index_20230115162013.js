import { configureStore ,createSlice } from "@reduxjs/toolkit";


const UserSlice  = createSlice({
    name : "UserWalletId" ,
    initialState : { user  : null} ,
    reducers : {
        login (state ,action){
            state.user = action.payload
        },
        logout(state ,action){
            state.user = null ;
        }
    }

})