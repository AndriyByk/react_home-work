import {configureStore} from "@reduxjs/toolkit";

import {carReducer, userReducer, postReducer, commentReducer} from "./slices";

const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
});

export {store};