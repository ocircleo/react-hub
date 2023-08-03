import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
const Sortbtn = ({ sort, setSort, value, sortProduct }) => {
    const [clicked, setClicked] = useState(false)
    const btnCliked = () => {
        setClicked(true)
        setSort(value)
    }
    useEffect(() => {
        
        if (sort == value) {
            sortProduct(0)
        } else {
    
            setClicked(false)
        }
    }, [sort])
    return (
        <button className={`${clicked ? "bg-green-200" : 'bg-gray-200'} px-3 capitalize font-semibold text-sm pe-1 rounded-full flex items-center`} onClick={btnCliked}>{value}<RiArrowDropDownLine className='text-xl translate-y-[.12rem]' /></button>
    );
};

export default Sortbtn;