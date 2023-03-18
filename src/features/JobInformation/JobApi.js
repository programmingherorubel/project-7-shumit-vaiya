import axios from "../../Utilis/Utilis";

export const getJobs = async ()=>{
    const responce =await axios.get('/jobs')
    return responce.data
}
export const getJob = async (id)=>{
    const responce =await axios.get(`/jobs/${id}`)
    return responce.data
}

export const addJobs = async (data)=>{
    const responce = await axios.post('/jobs',data)
    return responce.data
}

export const editJobs = async(id,data)=>{
    const responce = await axios.put(`/jobs/${id}`,data)
    return responce.data
}

export const deleteJobs = async(id)=>{
    const responce = await axios.delete(`/jobs/${id}`)
    return responce.data
}