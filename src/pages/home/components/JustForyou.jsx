import React, { useContext, useEffect, useState } from 'react';
import MainCard from '../../../components/maincard/MainCard';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Sortbtn from '../../../components/sotbtns/Sortbtn';
import Pagination from './Pagination';

const JustForyou = () => {
    const [productData, setProductData] = useState([]);
    const [aproximate, setAproximate] = useState(0);
    const [loadingProduct, setLoadingProduct] = useState(true)
    const totalpage = Math.ceil(parseInt(aproximate.length) / 12) || 7;
    const totalbtn = [...new Array(totalpage).keys()]
    const [sort, setSort] = useState(false)
    const [paignationHandler, setPaginationHandler] = useState(0)

    const sortProduct = (para) => {
        setLoadingProduct(true)
        fetch(`https://reacthubbackend.vercel.app/range?start=${para * 12}&limit=12${sort ? '&sort=' + sort : ''}`).then(res => res.json()).then(data => { setProductData(data); setLoadingProduct(false); setPaginationHandler(para) })
    }
    useEffect(() => {
        const fetchData = () => {
            fetch('https://reacthubbackend.vercel.app/range?start=0&limit=12').then(res => res.json()).then(data => { setProductData(data); setLoadingProduct(false) }).catch(error => {
                if (error) {
                    fetchData()
                } else {
                    console.log('o');
                }
            })
        }
        fetch('https://reacthubbackend.vercel.app/approximate').then(res => res.json()).then(data => { setAproximate(data) }).catch(error => console.log(error))
        fetchData();
    }, [])
    const sortBtns = ["price", "category", "ratings", "shipping",]
    return (
        <>
            {/* ==== filter btns ===== */}
            <div className='w-full gap-2 flex-wrap flex items-center justify-between'>
                <div className='flex gap-2 flex-wrap'>
                    {
                        sortBtns.map(ele => <Sortbtn value={ele} sort={sort} setSort={setSort} sortProduct={sortProduct}></Sortbtn>)
                    }

                    <button className='bg-gray-200 px-3 capitalize font-semibold text-sm py-1 rounded-full'>all fillter</button>

                </div>
                <button className={`bg-gray-200 px-3 p-1 capitalize font-semibold text-sm pe-1 rounded-full flex items-center`}>Sort by<RiArrowDropDownLine className='text-xl translate-y-[.12rem]' /></button>
            </div>
            <h1 className="text-2xl font-semibold px-1  py-8">Products for you</h1>
            {/* ===== main product card ====  */}
            <div className='flex flex-wrap gap-5 items-center justify-center w-full mx-auto min-h-[12rem]'>
                {
                    loadingProduct ? <div className='w-full text-center'>Loading... <br />(please refersh if not loaded)</div> : <>

                        {
                            productData.map(ele => <MainCard key={ele._id} data={ele}></MainCard>)
                        }
                    </>
                }
                {/* ===== Pagination ===== */}
                <div className="join gap-1 w-full justify-center">

                    {
                        totalbtn.map(ele => <Pagination key={ele} sortProduct={sortProduct} value={ele} paignationHandler={paignationHandler} setPaginationHandler={setPaginationHandler}></Pagination>)
                    }
                </div>

            </div>
        </>
    );
}

export default JustForyou;