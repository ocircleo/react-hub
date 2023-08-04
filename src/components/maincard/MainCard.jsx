import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHeart } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const MainCard = ({ data }) => {
    const { _id, name, ratings, price, seller, img
    } = data
    const StarDrawing = (
        <path
            d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
            c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
            c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
            c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
            c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
            C426.818,168.817,420.858,143.814,398.799,141.794z"
        />
    )
    const customStyles = {
        itemShapes: StarDrawing,
        activeFillColor: '#22C55E',
        inactiveFillColor: '#BBF7D0',
    };
    return (

        <div className="flex flex-col gap-2 w-60 h-[24rem] relative flex-shrink-0 pb-2">
            <Link to={`/detaill/${_id}`}>
                <figure className='h-[14rem] bg-slate-100 w-full object-cover z-20 rounded-lg'><img src={img} alt="Shoes" className='h-[14rem] w-full object-cover rounded' /></figure>

            </Link>
            <div className="flex flex-col justify-between items-start w-full gap-1 p-2 h-[10rem]">
                <Link className="flex flex-col justify-between items-start w-full gap-1 ">

                    <div className='w-full'>
                        <div className='flex justify-between items-center capitalize font-semibold text-sm px-1 w-full '>
                            <h3 title='product name' >{name.length > 25 ? name.slice(0, 18) + "..." : name}</h3>
                            <p title='price' className='text-center text-gray-600'>${price}</p>
                        </div>
                        <div className=''>Seller: <span className='text-gray-500 font-semibold text-sm'>{seller}</span> </div>
                        <div className=''>  <Rating
                            style={{ maxWidth: 90 }}
                            value={ratings}
                            itemStyles={customStyles}
                            readOnly
                        /></div>
                    </div>
                </Link>

                <button className='cursor-pointer capitalize hover:bg-green-900 hover:text-white active:scale-90 duration-200 font-semibold text-sm  px-3 py-1 border-2 border-green-900 rounded-full'>
                    Add to cart
                </button>

            </div>
        </div>

    );
};

export default MainCard;