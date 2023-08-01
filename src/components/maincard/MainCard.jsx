import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const MainCard = ({ data }) => {
    const { name, ratings, price, seller, img
    } = data
    return (
        <Link>
            <div className="flex flex-col gap-2 w-60 h-80 relative flex-shrink-0 pb-2">
                <figure className='h-44 bg-slate-100 w-full object-cover z-20 rounded-lg'><img src={img} alt="Shoes" className='h-44 w-full object-cover rounded' /></figure>
                <div className="flex flex-col justify-between items-start w-full gap-1 p-2 h-36">
                    <div className='w-full'>
                        <div className='flex justify-between items-center capitalize font-semibold text-sm px-1 w-full '>
                            <h3 title='product name' >{name.length > 25 ? name.slice(0, 18) + "..." : name}</h3>
                            <p title='price' className='text-center text-gray-600'>${price}</p>
                        </div>
                        <div className=''>seller: {seller}</div>
                        <div className=''>  <Rating
                            style={{ maxWidth: 90 }}
                            value={ratings}
                            readOnly
                        /></div>
                    </div>


                    <div className='cursor-pointer capitalize hover:bg-green-900 hover:text-white active:scale-90 duration-200 font-semibold text-sm  px-3 py-1 border-2 border-green-900 rounded-full'>
                        Add to cart
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default MainCard;