import React from 'react'
import { useSession } from "next-auth/react";
import LoadingComponent from '../../components/LoadingComponent';
import Unauthorized from '../../components/Unauthorized';
import Dashboard from '../../components/Dashboard';


const Home = () => {
     
    const { status } = useSession();
    
    if (status === 'loading') return (
        <LoadingComponent/>
    )
        if (status === 'authenticated') {
             return (
        <Dashboard/>
    )
        }
        return <Unauthorized/>
   
}

export default Home

 