import {reducer} from './reducer'
import {configureStore} from "@reduxjs/toolkit"//toolkit bao bọc redux core
export const store = configureStore({reducer: reducer})