'use client'

import React from 'react'
import styled from '@emotion/styled'
import { Card } from '../../../Type'
import Image from 'next/image'
export default function Testominal(props:Card) {
  

  const Cardbox=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 4rem;
    justify-content: center;
    align-items: center;

  `
   

   const Deskcriptionbox=styled.div`
   max-width: 40rem;
   padding-inline: 3.1rem;

   `

  const Para=styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-style: initial;
    font-family: system-ui;
    text-align: justify;
  `

const Name=styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    font-style: initial;
    font-family: cursive;
  `

  

  return (
    <Cardbox>

    <Image src={props.src} alt='' width={220} height={220}/>
    <Deskcriptionbox>
      <Image src='/images/Testominal identifier.png' width={48}  height={48} alt=''/>
      <Para>{props.deskcription}</Para>
      <Name>{props.title}</Name>
    </Deskcriptionbox>
    </Cardbox>
  )
}
