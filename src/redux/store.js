import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice";
import { filterReducer } from "./filter/filterSlice";

const store = configureStore({
    reducer:{
        search: searchReducer,
        filter: filterReducer
    }
}
)

export default store