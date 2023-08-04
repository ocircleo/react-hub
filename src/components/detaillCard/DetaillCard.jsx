import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import CardCarsoule from '../cardCarsoule/CardCarsoule';
const DetaillCard = () => {
    const { img, price, ratings, name } = useLoaderData()
    const [count, setCount] = useState(0)
    const updateCount = (para, type) => {
        setCount(currentValue => {
            if (type == '+') return currentValue + para;
            if (count == 0) return 0;
            return currentValue - para
        })
    }
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
        <div className='container mx-auto  px-2'>

            <ul className='flex gap-1 text-sm text-gray-600 my-3 font-semibold '>
                <li><Link to={'/'}>Home</Link> / </li>
                <li className='text-gray-800'>Card Detaill</li>
            </ul>

            <div className='grid grid-cols-4  gap-5 mt-2 '>
                <div className='h-[25rem] md:h-[36rem] lg:h-[45rem] col-span-4 lg:col-span-2 rounded block'>
                    <CardCarsoule img={img}></CardCarsoule>
                </div>
                <div className=' col-span-4 lg:col-span-2   rounded flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold pb-3'>{name}</h1>
                        <p className='lg:w-2/3 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores expedita dolor alias praesentium? Nisi, quisquam</p>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={ratings}
                            itemStyles={customStyles}
                            readOnly
                        />
                        <div className='h-[.15rem] my-5 bg-gray-100 w-full' />
                    </div>
                    <div>
                        <p className='text-xl py-1 font-bold'>${price} or ${(price / 3).toFixed(1)}/month</p>
                        <p className='text-sm'>Suggesed payment with 3 months special financing</p>

                    </div>
                    <div className='h-[.15rem] my-5 bg-gray-100 w-full' />
                    <div>

                        <p className='text-lg font-semibold capitalize'>choose color</p>
                        <div className='flex gap-5'>
                            <div className='h-12 w-12 border-4 active:border-blue-400 cursor-pointer border-blue-100 hover:border-blue-300 flex flex-col rounded-full'>
                                <div className='h-1/2 w-full bg-red-500 rounded-t-full '></div>
                                <div className='h-1/2 w-full bg-pink-200 rounded-b-full '></div>
                            </div>
                            <div className='h-12 w-12 border-4 active:border-blue-400 cursor-pointer border-blue-100 hover:border-blue-300 flex flex-col rounded-full'>
                                <div className='h-1/2 w-full bg-gray-300 rounded-t-full '></div>
                                <div className='h-1/2 w-full bg-gray-500 rounded-b-full '></div>
                            </div>
                            <div className='h-12 w-12 border-4 active:border-blue-400 cursor-pointer border-blue-100 hover:border-blue-300 flex flex-col rounded-full'>
                                <div className='h-1/2 w-full bg-teal-800/30 rounded-t-full '></div>
                                <div className='h-1/2 w-full bg-gray-200 rounded-b-full '></div>
                            </div>
                            <div className='h-12 w-12 border-4 active:border-blue-400 cursor-pointer border-blue-100 hover:border-blue-300 flex flex-col rounded-full'>
                                <div className='h-1/2 w-full bg-gray-100 rounded-t-full '></div>
                                <div className='h-1/2 w-full bg-gray-300 rounded-b-full '></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[.15rem] my-5 bg-gray-100 w-full' />
                    <div className=''>
                        <div className='mt-3 mb-5 flex items-center flex-col md:flex-row gap-5'>
                            <button className='bg-gray-100 rounded-full px-10 flex gap-5 py-2 font-semibold text-lg'>
                                <button onClick={() => updateCount(1, "-")} className='text-xl px-2 border-2 border-transparent active:border-gray-300 rounded scale-150'>-</button>
                                <p>{count}</p>
                                <button onClick={() => updateCount(1, "+")} className='text-xl px-2 active:border-gray-300 border-2 border-transparent rounded scale-125'>+</button>
                            </button>
                            <p>Only <span className='text-orange-500'>4 items</span> left <br />Dont miss it !</p>
                        </div>
                        <div className='font-semibold flex flex-col md:flex-row text-lg gap-3'>
                            <button className='px-14 py-3 bg-green-900 border-2 border-green-900 rounded-full capitalize text-white text-center'>buy now</button>
                            <button className='px-10 py-3 border-2 border-green-900 rounded-full capitalize text-green-900  text-center'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[.15rem] my-5 bg-gray-100 w-full' />

                    {/* ===== Deivery section ===== */}
                    <div className='h-[10rem] w-full border flex flex-col justify-between'>
                        <div className='flex gap-2 h-[5rem] p-2'>
                            <div className='w-16 h-full'>
                                <img src={img} alt="" className='h-14' />
                            </div>
                            <div>
                                <p className='font-semibold'>Free delivery</p>
                                <p className='text-sm text-gray-500 font-semibold underline'>Enter your postal code for delivery availablity</p>
                            </div>
                        </div>
                        <div className='h-[.15rem] my-2 bg-gray-100 w-full' />
                        <div className='flex gap-2 h-[5rem] p-2'>
                            <div className='w-16 h-full'>
                                <img src={img} alt="" className='h-14' />
                            </div>
                            <div>
                                <p className='font-semibold'>Return delivery</p>
                                <p className='text-sm text-gray-500 font-semibold'>Free 30 days delivery returns <Link className='underline text-gray-600'>Details</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default DetaillCard;