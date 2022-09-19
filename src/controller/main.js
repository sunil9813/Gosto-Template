import { combineReducers } from "redux"
import { cartReducer } from "./reducer"

const root = combineReducers({
  cartReducer,
})

export default root
