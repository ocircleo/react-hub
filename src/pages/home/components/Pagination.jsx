import React, { useEffect, useState } from 'react';

const Pagination = ({ sortProduct, value, paignationHandler, setPaginationHandler }) => {
    const [clicked, setClicked] = useState(false)
    const paginationClicked = () => {
        sortProduct(value)
        setClicked(true)
        setPaginationHandler(value)
    }
    useEffect(() => {
        if (paignationHandler == value) return;
        setClicked(false)
    }, [paignationHandler])
    return (
        <>
            <button onClick={paginationClicked} className={`join-item hidden md:block btn btn-md ${clicked ? "bg-gray-300" : ""}`}>{value}</button>
            <button onClick={paginationClicked} className={`join-item block md:hidden btn btn-xs ${clicked ? "bg-gray-300" : ""}`}>{value}</button>

        </>
    );
};

export default Pagination;