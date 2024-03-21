import React from "react"

const AuthMiddleware =  ({children}: {children: React.ReactNode}) => {

    console.log("auth middleware");
    return (
        <> {children} </>
    );   
}

export default AuthMiddleware;