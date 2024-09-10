'use client'

import styled from "@emotion/styled"

import { Card } from "../../../../Type"

import Image from "next/image"

export default function Deskcription(props:Card) {
    
    const DeskcriptionCard=styled.div`
    width:250px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom: 40px;
    `
    const Box=styled.div`
    width:200px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    `
    

    const Para1=styled.h6`
    font-size:0.9rem;
    margin: 0;
    line-height: 50px;
    `


    
    const Para2=styled.h6`
    font-size: 0.9rem;
    color: grey;
    margin: 0;
    `

    
    return (
        <>       
         <DeskcriptionCard>

           <Image src={props.src} width={21} height={18} alt="" style={{alignSelf:'center', marginBottom:'32px'}} />

    <Box>
           <Para1>{props.title}</Para1>
           <Para2>{props.deskcription}</Para2>                
    </Box>
      
        </DeskcriptionCard>
        </>

    )
} 