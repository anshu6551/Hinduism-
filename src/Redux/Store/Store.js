import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/Slice"
import festivalsSlice from "../Slice/festivalsSlice";




export const store=configureStore({
reducer:{
contents: authSlice,
festival: festivalsSlice,



}
})