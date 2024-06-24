import { createContext, useState } from "react";

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [signed, setSigned] = useState(false)
    const [userId, setUserId] = useState(false)

    const authObject = { 
        signed: signed, 
        setSigned: setSigned, 
        userId: userId, 
        setUserId: setUserId
    }

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;