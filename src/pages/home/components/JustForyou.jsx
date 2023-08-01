import React, { useContext } from 'react';
import MainCard from '../../../components/maincard/MainCard';
import { contextProvier } from '../../../private/provider/Provider';

const JustForyou = () => {
    const { shoeData } = useContext(contextProvier)
    return (
        <div className='flex flex-wrap gap-5 items-center justify-center lg:w-[65rem] mx-auto'>
            {
                shoeData.map(ele => <MainCard key={ele.id} data={ele}></MainCard>)
            }
        </div>
    );
};

export default JustForyou;