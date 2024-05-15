import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from "redux-logger"

import taskReducer from "./task/taskReducer"

const store = createStore(combineReducers({taskReducer}), applyMiddleware(logger))

export default store
