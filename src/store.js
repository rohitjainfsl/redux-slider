import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from './slice'

export default configureStore({
    reducer: {
        slider: sliderReducer
    }
})