import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AppNav = () => {
    return (
        <div>  
          <ul>
            <li>
              <Link href={'/'}> Home </Link>
            </li>
            <li>
              <Link href={'/product'}> Product </Link>
            </li>
            <li>
              <Link href={'/product/men'}> Product Men </Link>
            </li>
            <li>
              <Link href={'/product/women'}> Product Women </Link>
            </li>
            <li>
              <Link href={'/profile'}> Profile </Link>
            </li>
          </ul>
        </div>
    );
};

export default AppNav;
