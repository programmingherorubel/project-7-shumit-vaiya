import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEditJobsInformation, fetchSingleJob } from '../features/JobInformation/JobSlice';

const EditForm = () => {
    const { editjob } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleJob(editjob))
    }, [])
    const { isLoading, selected } = useSelector((state) => state.jobs)


    const { title, type, salary, deadline, id } = selected || {}

    const [newtitle, setTitle] = useState("")
    const [newtype, setType] = useState("")
    const [newsalary, setSalary] = useState("")
    const [newdeadline, setDeadline] = useState("")

    useEffect(() => {
        if (selected.title) {
            setTitle(title)
            setType(type)
            setSalary(salary)
            setDeadline(deadline)
        }
    }, [title, type, salary, deadline])




    const hendelEditSubmit = (e) => {
        e.preventDefault()
        // dispatch(fetchEditJobsInformation({
        //     id: id,
        //     data: { title: newtitle,
        //          salary: newtype,
        //          type: newsalary,
        //          deadline: newdeadline,
        //      }
        // }))
        console.log(newtitle,
            newtype,
            newsalary,
            newdeadline,);
        navigate('/')
    }
    let content;
    if (isLoading) {
        content = <h4>Loading</h4>
    }
    if (!isLoading && selected.title) {
        content = <form className="space-y-6" onSubmit={hendelEditSubmit}>
            <div className="fieldContainer">
                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                <select id="lws-JobTitle" name="lwsJobTitle" required defaultValue={title} onChange={e => setTitle(e.target.value)}>
                    <option defaultValue="title" hidden >Select Job</option>
                    <option>Software Engineer</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>DevOps Engineer</option>
                    <option>QA Engineer</option>
                    <option>Product Manager</option>
                    <option>Social Media Manager</option>
                    <option>Senior Executive</option>
                    <option>Junior Executive</option>
                    <option>Android App Developer</option>
                    <option>IOS App Developer</option>
                    <option>Frontend Developer</option>
                    <option>Frontend Engineer</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select id="lws-JobType" name="lwsJobType" defaultValue={type} onChange={e => setType(e.target.value)} >
                    <option defaultValue={type} hidden >Select Job Type</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                        placeholder="20,00,000" defaultValue={salary} onChange={e => setSalary(e.target.value)} />
                </div>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required defaultValue={deadline} onChange={e => setDeadline(e.target.value)} />
            </div>

            <div className="text-right">
                <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                    Edit
                </button>
            </div>
        </form>
    }

    return (
        <>{content}</>
    );
};

export default EditForm;