'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const Menu = () => {
    let currentPath = usePathname(); //to retrive users current path
    return (
        <div>
            <h1> {currentPath}</h1>
            <Link className={currentPath === '/'?'active-link':'pending-link'} href={'/'}> Home </Link> <br />
            <Link className={currentPath === '/products'?'active-link':'pending-link'} 
            href={{pathname:'/products', query:{name:'boook',price:'200 taka'}}}> 
            Products </Link> <br />
            <Link className={currentPath === '/about'?'active-link':'pending-link'} href={'/about'}> About </Link> 
        </div>
    );
};

export default Menu;