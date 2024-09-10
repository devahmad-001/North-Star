'use client'


import React from 'react'
import PageContent from '../sharedComp/pageContent/PageContent'
import styled from '@emotion/styled'


export default function ConatctUS() {

    const ConatactPage = styled.div`
        display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    `



    const Section1 = styled.div`

    `
    const Section2 = styled.div`
   
   `



    const FormTitle = styled.h1`
    text-align: justify;
  
  `

    const Formpara = styled.p`
    font-size: 0.9rem;
    text-align: justify;
`

    const FormHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-inline: 15px;
`




    const Input = styled.input`
    border-radius: 2px;
    outline: none;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

 
    
   `

    const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.8rem
   `

    const NameEmailbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
   `
   const NameEmailTextbox=styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   `

    const InputForm = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap; 
   `

    const Span = styled.span`
    margin-block: 0.4rem;
   `

    const Textarea = styled.textarea`
     border: 1px solid lightgrey;
    border-radius: 2px;
    outline: none;
    width: 42rem;
    height: 8rem;
    align-self: flex-start;
   
    `

    const Visitbox = styled.div`
    
   `

    const Visititle = styled.h2`
    
   `

    const VisitPara = styled.p`
    
   `

    const GetInTouchbox = styled.div`
    
   `

    const GetInTouchitle = styled.h2`
    
   `

    const GetInTouchPara = styled.p`
    
   `




    return (

        <>
            <PageContent src='/images/contact-us/Contact.jpg' title='CONTACT US' />

            <ConatactPage>

                <Section1>

                    <FormHead>
                        <FormTitle>We would love to hear from you</FormTitle>
                        <Formpara>If you have any query or any type of suggestion, you can contact us here. We would love from you.</Formpara>
                    </FormHead>

                    <InputForm action="">

                        <NameEmailTextbox>

                            <NameEmailbox>

                                <InputBox><Span>Name</Span><Input /></InputBox>
                                <InputBox><Span>Email</Span><Input /></InputBox>

                            </NameEmailbox>

                            <InputBox><Span>Message</Span><Textarea cols={20} rows={4}  /></InputBox>

                        </NameEmailTextbox>


                    </InputForm>

                </Section1>

            </ConatactPage>
        </>
    )
};


/* <Section2>
                    <Visitbox>
                        <Visititle>VIsit US</Visititle>
                        <VisitPara>UET Lahore, Punjab, Pakistan<br />Phone :+923039898987 </VisitPara>
                    </Visitbox>


                    <GetInTouchbox>
                        <GetInTouchitle>Get In Touch</GetInTouchitle>
                        <GetInTouchPara>You can get in touch us with the provided email <br />Email:hmjawadf07@gmail.com </GetInTouchPara>
                    </GetInTouchbox>
                </Section2> */