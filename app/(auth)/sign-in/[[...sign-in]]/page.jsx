import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw"
        }}>
        <SignIn />
        </div>
    );
}

export default page
