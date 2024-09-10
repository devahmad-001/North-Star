'use client'

import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProductDetails() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 
 
 const Productbox=styled.div`
        
    `
    const Picbox=styled.div`
        width: fit-content;
        height: fit-content;
    `
    const Detailbox=styled.div`
    
    `
  const Price=styled.p`
      font-size: 1.3rem;
      color: #024E82;
      font-weight: 400;  
  `
    return (
    (
     <>
     <Picbox data-aos="zoom-in"><Image  src={'/images/man.png'} width={440} height={548} alt=''/></Picbox>
      <Detailbox>
        <h1>Plain T Shirt</h1>
       <del>$69</del>
        <Price>$54</Price>
      </Detailbox>
     </>
    )
  )
}
