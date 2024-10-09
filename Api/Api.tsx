"use client"; 

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ApiStyle.css'
import { Product } from './Api'; 
import Link from 'next/link';


function AxiosApiProduct() {
    const [ user , setUser ] = useState<Product[]>([])
    const [loading,setLoading] = useState(true)

    const url = 'https://fakestoreapi.com/products'
    

    const cutLatter = (text:string,maxLenght:number) =>{
        if(text.length > maxLenght){
            return text.slice(0,maxLenght) + '...';
        }
        return text

    }
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            console.log(data);
            setUser(data)
            setLoading(false)
            
        })
        .catch(err=>console.error('api error: ' + err))
        setLoading(false)


    },[])

    return (
        <div className='boxs '>
            {loading ? (
                <div className="preloader"></div>  
            ) : (
                user.map(({ id, title, price, description, image }) => ( 
                    <Link href={`/productsdetail/${id}`} key={id} className='box'>             
                        <div>
                            <img src={image} alt="image" className='' width={200} />
                            <h3>{title}</h3>
                            <p>{cutLatter(description,100)}</p>
                            <p className='money font-bold '>{`${price} AZN`}</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
    
    
}

export default AxiosApiProduct