'use client'

import { Card } from "../../../../Type"

import styled from "@emotion/styled";

import Image from "next/image";


export default function Cards(props:Card) {
 
const Title=styled.h1`
font-size: 1.1rem;
font-family: system-ui;
letter-spacing: 0.5px;
margin: 10px;
`


const Price=styled.p`
font-size: 1.2rem;
    color: #024E82;
    margin: 10px;

`

const Cardbox=styled.div`
width:270px;
height:420px;
text-align:center;
margin: 10px;

` 


return (
        
        <Cardbox>
        <Image src={props.src} alt="" width={270} height={300} />
        <Title>{props.title}</Title>
        <Price>{props.price}</Price>
        </Cardbox>
        
    )
}