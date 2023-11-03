'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../app/global.module.css'
const ClientProduct = () => {

    let [data,setData] = useState([]);
  
    useEffect(()=>{
      (async()=>{
        let res = await fetch ('https://dummyjson.com/products');
        let json = await res.json();
        console.log(json)
        setData(json['products']);
      })()
  },[])


    return (
        <div>
            <div className={styles.card}>
                {data.map((item,index)=>{
                return <div key={index}>
                    <h1>{item['title']}</h1>
                    <h1>{item['price']}</h1>
                </div>
                })}
            </div>
    </div>
    );
};

export default ClientProduct;