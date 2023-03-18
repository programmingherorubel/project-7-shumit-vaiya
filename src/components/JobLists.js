import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import JobList from './JobList';

const JobLists = () => {
    

    const {isLoading,isError,jobs} = useSelector((state)=> state.jobs)
    const {search}  = useSelector(state => state.filter) || ''
    const sort = useSelector(state => state.sort.value)
    
    let jobContent ;
    

    

    // decide to render 
    if(isLoading) jobContent = <Loading />
    if(!isLoading && isError) jobContent = <p>Error..</p>
    if(!isLoading && !isError && jobs.length > 0){
        jobContent = jobs
        .filter(job => {
            if(search){
                return job.title.toLowerCase().includes(search.toLowerCase())
            }
            return job
        })
        .sort((a,b)=>{
            if(sort === "lowToHigh"){
                console.log('lowToHigh')
                return b.salary - a.salary  
            }else if(sort === "highToLow"){
                return a.salary - b.salary 
            }
            return true
        })
        .map(job => <JobList job={job} key={job.id}/>
        )
    }
    if(!isLoading && !isError && jobs?.length === 0){
        jobContent = <p>No Jobs Found</p>
    }

    

    return (
        <div className="jobs-list">
                    {/* <!-- Single Job 1--> */}
                        {
                            jobContent
                        }
                    {/* <!-- Single Job 1--> */}
                </div>
    );
};

export default JobLists;