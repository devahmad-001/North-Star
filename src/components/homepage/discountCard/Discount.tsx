import styled from "@emotion/styled";
import { Card } from "../../../../Type";
import Btn from "../../sharedComp/btnShopNow/btn";

export default function Discount(props:Card) {
    
    const Title=styled.h1`
    font-size: 2rem;
    font-family: system-ui;
    font-weight: 400;
    color: white;
    `
    
    
    const Para=styled.p`
    font-size: 1.2rem;
    font-family: system-ui;
    font-weight: 400;
    color: white;
    `   

 
    const SalesCard=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: black;
    padding: 50px;
    padding-inline: 70px;
    margin: 15px;
    `
    
    return (
        
        <SalesCard>
         <Title>{props.title}</Title>
         <Para>{props.deskcription}<br/>{props.src}</Para>
         <Btn btntext={props.btntext} btncolor={props.btncolor}/>
        </SalesCard>
    
)
}