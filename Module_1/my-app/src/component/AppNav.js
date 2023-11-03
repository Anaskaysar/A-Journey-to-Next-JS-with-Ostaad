import React from 'react';
import styles from "./appnav.module.css"
import Link from 'next/link';
const AppNav = () => {
    return (
        <div>
            <ul className={styles.list}>
                <Link href='/'>Home</Link>
                <Link href='/products' >Our Products</Link>
                <Link href='/aboutus'>About Us</Link>
                <Link href='/contact'>Contact</Link>
            </ul>
        </div>
    );
};

export default AppNav;