async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache:'no-store', next:{revalidate:3600}})  //revalidate happens in seconds
    const data = await res.json()
    if(!res.ok){
        throw new Error("Something Went Wrong")
    }
    return data;
}

//Error Handling From Multple Data Source

async function getData2(){
    try{
        const res1 = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await fetch('https://jsonplaceholder.typicode.com/users')
        const res3 = await fetch('https://jsonplaceholder.typicode.com/users')

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        return {data:data1, data2:data2, data3:data3}
    }
    catch{
        throw new Error('Error')
    }
}

import React from 'react';

const Page = async () => {
    const data = await getData();
    const dataM = await getData2();

    return (
        <div>
            <h1>This is Server Side Rendering in Profile Page</h1>
            {/* <p>{props.data.toString()}</p> */}
            {/* <p>{JSON.stringify(data)}</p> */}
            <p>Data 1: {JSON.stringify(dataM['data1'])}</p>
            <p>Data 2: {JSON.stringify(dataM['data2'])}</p>
            <p>Data 3: {JSON.stringify(dataM['data3'])}</p>
        </div>
    );
};

export default Page;