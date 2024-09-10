'use client'

import styled from "@emotion/styled";

import Image from "next/image";

export default function Footer() {


   let array=[
    {
        title:'COMPANY INFO',
        info:['About us','Latest Posts','Contact Us','Shop']
        
    },

    {
        title:'HELP LINKS',
        info:['Tracking','Order Status','Delivery ','Shopping info','FAQ']
        
    },

    {
        title:'USEFUL LINKS',
        info:['Special Offers','Gift Cards','Advertising','Term OF Use']
        
    }

   ];


   const Para1=styled.p`
   font-weight: 600;
   font-size: smaller;
   `

   const Fbox=styled.div`
   width:fit-content;
   height: fit-content;
   margin: 20px;
   `

 
   const Footerbase=styled.div`
   display: flex;
    justify-content: space-between;
    border-top: 2px solid lightgrey;
    border-block-start-color: 1px solid grey;
    padding-block: 25px;
    margin-inline: 5rem;
    margin: 50px;
    flex-wrap: wrap;
   `



   const Footerbox=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: justify;
   
}`


const Footer=styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: normal;
background-color:#f2f2f299;
margin-block-start: 35px;
`
   

   return (
    <Footer>
    
    <Footerbox>
    {
        array.map((item)=>{
            return (
                <>
                <Fbox>
                <Para1>{item.title}</Para1>
                 {item.info.map((item:any)=>{
                    return <>
                    <p>{item}</p>
                    </>
                 })}
                </Fbox>
                </>
            )
        })
    }
    <Fbox>
        <Para1>GET IN THE NEW</Para1>
        <input style={{border:"none",height: '25px',borderBottom:'2px solid grey',backgroundColor:'#f2f2f299'}}  placeholder="Enter Mail"/><span style={{fontSize:'20px',paddingInlineStart:"5px"}}>&gt;</span>
        
    </Fbox>
    </Footerbox>
       
    <Footerbase>

      <div>
        <p>2020 NorthStar eCommerce
        <br/> Privacy Policy Terms & Conditions </p>
      </div>
     
     <div>
      <Image style={{margin:"12px"}} width={56} height={34} src={'/images/footer-imgs/pay 1.png'} alt=""/>
      <Image style={{margin:"12px"}} width={56} height={34} src={'/images/footer-imgs/pay 2.png'} alt=""/>
      <Image style={{margin:"12px"}} width={56} height={34} src={'/images/footer-imgs/pay 3.png'} alt=""/>
      <Image style={{margin:"12px"}} width={56} height={34} src={'/images/footer-imgs/pay 4.png'} alt=""/>
      </div>

    </Footerbase>
    </Footer>
   
    

)}