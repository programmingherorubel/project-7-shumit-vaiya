import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searched } from '../features/filter/filterSlice';
import { sortValues } from '../features/Sort/sortSlice';

const Header = () => {
    const [input,setInput]=useState('')
    const [sortValue,setSortValue]=useState('')
    const dispatch = useDispatch()


    const onSubmitHandeler = (e)=>{
        e.preventDefault()
        dispatch(searched(input))
    }

    useEffect(()=>{
        dispatch(sortValues(sortValue))
    },[dispatch,sortValue])

    
    return (
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <div className="search-field group flex-1">
                            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                            <form onSubmit={onSubmitHandeler}>
                            <input type="text"value={input} onChange={e => setInput(e.target.value)} placeholder="Search Job"  className="search-input" id="lws-searchJob" />
                            </form>
                        </div>
                        <select id="lws-sort" name="sort" defaultValue={sortValue} onChange={e => setSortValue(e.target.value)} autoComplete="sort" className="flex-1">
                            <option>Default</option>
                            <option value='lowToHigh'>Salary (Low to High)</option>
                            <option value='highToLow'>Salary (High to Low)</option>
                        </select>
                    </div>
                </div>
    );
};

export default Header;