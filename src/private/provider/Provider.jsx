import React, { createContext, useEffect, useState } from 'react';
export const contextProvier = createContext(null)

//Extra variables 
const url = './products.json';

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [loading, setLoading] = useState(true)
    const [shoeData, setShoeData] = useState([])



    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setShoeData(data))
    }, [])


    let ProviderData = {
        user, setUser, loading, refetch, setRefetch, shoeData
    }
    return (
        <contextProvier.Provider value={ProviderData}>
            {children}
        </contextProvier.Provider>
    );
};

export default Provider;