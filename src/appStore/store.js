import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from "../appFeatures/counterSlice"
import privacyReducer from "../appFeatures/privacySlice"


 const counterStore= configureStore({reducer: {
    counter: counterReducer,
    privacy: privacyReducer

}})

export default counterStore;

