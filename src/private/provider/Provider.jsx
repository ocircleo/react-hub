import React, { createContext, useEffect, useState } from 'react';
export const contextProvier = createContext(null)

//Extra variables 

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [loading, setLoading] = useState(true)
    const [dropReset, setDropReset] = useState(true)



    let ProviderData = {
        user, setUser, loading, refetch, setRefetch, dropReset, setDropReset
    }
    return (
        <contextProvier.Provider value={ProviderData}>
            {children}
        </contextProvier.Provider>
    );
};

export default Provider;