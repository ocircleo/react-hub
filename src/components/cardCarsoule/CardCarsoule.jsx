import React, { useEffect, useState } from 'react';

import './cardcarsoule.css'
const CardCarsoule = ({ img }) => {
    const [bigImage, setBImage] = useState(img)
    //optional for giving a vive as if the image is changing
    const changeImage = (para) => {
        setBImage(null)
        setTimeout(() => {
            setBImage(para)
        }, 100);
    }
  
    // to scroll top when enteres the page
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <>
            <div className='flex flex-col justify-between h-full'>
                <div className='h-[19rem] md:h-[30rem] lg:h-[39rem] w-full bg-slate-100 rounded-md'>
                    <img src={bigImage} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='h-[5rem] bg-gray-50 gap-2 grid grid-cols-4 md:overflow-auto'>


                    <img src={img} onClick={() => changeImage(img)} alt="" className='h-[5rem] object-center rounded-md w-full object-cover cursor-pointer  active:scale-90 duration-150 scale-100' />
                    <img src={img} onClick={() => changeImage(img)} alt="" className='h-[5rem] object-center rounded-md w-full object-cover cursor-pointer active:scale-90 duration-150 scale-100' />
                    <img src={img} onClick={() => changeImage(img)} alt="" className='h-[5rem] object-center rounded-md w-full object-cover cursor-pointer active:scale-90 duration-150 scale-100' />
                    <img src={img} onClick={() => changeImage(img)} alt="" className='h-[5rem] object-center rounded-md w-full object-cover cursor-pointer active:scale-90 duration-150 scale-100' />

                </div>
            </div>
            <div></div>
        </>
    );
};

export default CardCarsoule;