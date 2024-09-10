'use client'

import styled  from "@emotion/styled";

import { Button, Card } from "../../../../Type";

export default function Btn(props:Button) {
    
    const Button=styled.button`
    color:${props.btncolor};
    width: 8rem;
    height: 3rem;
    background-color:${props.bgcolor};
    border: none;
    font-size: 1.1rem;
    font-family: sans-serif;
    margin-bottom: ${props.marginbtm};
    border: ${props.btnborder};
    `

    return (
        <Button>{props.btntext}</Button>
    )

}