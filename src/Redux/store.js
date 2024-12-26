import { configureStore } from "@reduxjs/toolkit";
import dataslicereducer from "../Redux/counter"

export const store=configureStore({
    reducer:{
        objstate:dataslicereducer
    }
})