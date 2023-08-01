import React, { createContext, useState } from 'react';
export const contextProvier = createContext(null)
const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [userRole, setUSerRole] = useState(null)
    const [loading, setLoading] = useState(true)



    let authData = {
        user, setUser, userRole, loading, refetch, setRefetch,
    }


    return (
        <contextProvier.Provider value={authData}>
            {children}
        </contextProvier.Provider>
    );
};

export default Provider;