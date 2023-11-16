'use client'

import AppNav from '@/components/AppNav';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data,setData] = useState([]);

    useEffect( ()=>{
        
        (async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setData(data);
            console.log(data)
        })()
    },[])
   
    return (
        <div>
            <h1>This is product page</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;