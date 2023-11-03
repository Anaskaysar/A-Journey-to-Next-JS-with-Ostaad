'use client'
import Menu from '@/components/Menu';
import { useSearchParams } from 'next/navigation';
import React from 'react';

// const Page = ({searchParams}) => {
//     return (
//         <div>
//             <Menu/>
//             <h1>This is Product Page</h1>
//             <h1>{searchParams.name}</h1>
//             <h1>{searchParams.price}</h1>
//         </div>
//     );
// };

//or

//Use search Param Hooks
const Page = () => {    
    const params = useSearchParams();
    return (
        <div>
            <Menu/>
            <h1>Product Page</h1>
            <h1>{params.get('name')}</h1>
            <h1>{params.get('price')}</h1>
        </div>
    );
};

export default Page;