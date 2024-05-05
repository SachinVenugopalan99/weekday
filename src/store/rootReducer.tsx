import { combineReducers } from "@reduxjs/toolkit";
import {reducer as jobs} from './modules/jobs'

export const rootReducer = combineReducers({jobs})