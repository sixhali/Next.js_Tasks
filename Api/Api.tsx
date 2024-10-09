"use client"; 
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Product } from './Api'

function AxiosApiProduct() {
    const [ user , setUser ] = useState<Product[]>([])
    const url = 'https://fakestoreapi.com/products'
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            console.log(data);
            setUser(data)
            
        })
        .catch(err=>console.error('api error: ' + err))

    },[])

    return (
        <div>
            {user.map(({ id , title , price , description , image  }) => (
                <div className='' key={id}>
                    <img src={image} alt="image" />
                        <h3>{title}</h3>
                        <p>{`${price}AZN`}</p>
                        <p>{description}</p>
                </div>
            ))}
        </div>
    );
    
}

export default AxiosApiProduct