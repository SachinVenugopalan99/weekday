import { createAction, createSlice } from "@reduxjs/toolkit";
import { apiSettings } from '../../api/api';
const GLOBAL_RESET = createAction('GLOBAL_RESET');

const name = 'jobs';

const initialState={
    jobs: [],
    isJobsLoading: false,
}

const slice = createSlice({
    name,
    initialState,
    reducers: {
        setJobs(state: any, {payload}) {
            state.jobs = [...state.jobs, ...payload];
        },
        setIsJobsLoading(state, {payload}) {
            state.isJobsLoading = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GLOBAL_RESET, () => {
            return initialState
        })
    }
})

export const {reducer} = slice;

export const actions = {
    jobs: (payload: any) => async (dispatch: any) => {
        try{
        dispatch(slice.actions.setIsJobsLoading(true));  
        const response = await apiSettings.fetchWeekDayJobs(payload);
        dispatch(slice.actions.setJobs(response?.jdList));
        return response;
        } catch(err) {
            console.error(err);
        } finally{
         dispatch(slice.actions.setIsJobsLoading(false));  
        }
    },
}

const getters = {
    jobs(rootState: any) {
    const state = rootState[name];
    return state.jobs;
    },
    isJobsLoading(rootState: any) {
    const state = rootState[name];
    return state.isJobsLoading;
   },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actions,
    getters,
    slice
}