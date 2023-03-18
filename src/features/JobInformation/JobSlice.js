import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobs, deleteJobs, editJobs, getJob, getJobs } from "./JobApi"

const initialState = {
    jobs: [],
    selected: {},
    isLoading: false,
    isError: false,
    error: ''
}



// async 
export const fetchJobsInformation = createAsyncThunk('jobs/fetchJobsInformation', async (search) => {
    const jobs = await getJobs(search)
    return jobs
})
export const fetchSingleJob = createAsyncThunk('jobs/fetchSingleJob', getJob)

export const fetchAddJobsInformation = createAsyncThunk('addJobs/fetchJobsInformation', async (data) => {
    const jobs = await addJobs(data)
    return jobs
})

export const fetchEditJobsInformation = createAsyncThunk('editJobs/fetchJobsInformation', async ({ id, data }) => {
    const jobs = await editJobs(id, data)
    return jobs
})

export const fetchDeleteJobsInformation = createAsyncThunk('deleteJobs/fetchJobsInformation', async (id) => {
    const jobs = await deleteJobs(id)
    return jobs
})


// slice 
const JobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        selectJob: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobsInformation.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchJobsInformation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs = action.payload
            })
            .addCase(fetchJobsInformation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
                state.jobs = []
            })


            .addCase(fetchAddJobsInformation.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchAddJobsInformation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs = action.payload
            })
            .addCase(fetchAddJobsInformation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })


            .addCase(fetchEditJobsInformation.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchEditJobsInformation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                const indexId = state.jobs.findIndex(job => job.id === action.payload.id)
                state.jobs[indexId] = action.payload
            })
            .addCase(fetchEditJobsInformation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })


            .addCase(fetchDeleteJobsInformation.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchDeleteJobsInformation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs = state.jobs.filter(
                    (job) => job.id !== action.meta.arg
                );

            })
            .addCase(fetchDeleteJobsInformation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })

            // single job
            .addCase(fetchSingleJob.pending, (state) => {
                state.isLoading = true
                state.isError = false
            }
            )
            .addCase(fetchSingleJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.selected = action.payload
            })
            .addCase(fetchSingleJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
                state.selected = {}
            })
    }
})

export default JobsSlice.reducer