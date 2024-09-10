"use client";

import React from "react";
import styled from "@emotion/styled";
import Keyframes from "styled-components/dist/models/Keyframes";
import Btn from "../sharedComp/btnShopNow/btn";

import AboutCards from "./Founders";
import Testominal from "./Testominalcard";
import PageContent from "../sharedComp/pageContent/PageContent";
import { keyframes } from "@emotion/react";
import Image from "next/image";

export default function About() {
  const Gernderbox = styled.div`
  `;
  const Gernder = styled.div`
  `;
  const Heading = styled.h1`
    text-align: center;
    margin-bottom: 2.5rem;
  `;
  const Founderbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `;
  const Founder = styled.div`
    background-color: #f7f7f7;
    padding-block: 3.125rem;
  `;
  const TestominalBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: justify;
  `;

  const TestomialTitle = styled.h1`
    margin-block-start: 3rem;
  `;

  return (
    <>
      <PageContent
        src={"/images/about-us-imgs/body.jpg"}
        title="ABOUT NORTHSTART"
      />
      <Gernderbox>
        <Gernder>
          <img src={"/images/about-us-imgs/mid 2.png"} alt="" />
          {/* <Btn
            marginbtm="80px"
            bgcolor="white"
            btncolor="#024E82"
            btntext="SHOP NOW"
          /> */}
        </Gernder>
        <Gernder>
          <img src={"/images/about-us-imgs/mid 1.png"} alt="" />
          {/* <Btn
            bgcolor="white"
            marginbtm="80px"
            btncolor="#024E82"
            btntext="SHOP NOW"
          /> */}
        </Gernder>
      </Gernderbox>
      <Founder>
        <Heading>The Founders</Heading>
        <Founderbox>
          <AboutCards
            title="HM Jawad"
            src={"/images/about-us-imgs/founder1.png"}
          />
          <AboutCards
            title="Furqan Abid"
            src={"/images/about-us-imgs/founder2.png"}
          />
          <AboutCards
            title="Abdullah Ah"
            src={"/images/about-us-imgs/founder3.png"}
          />
          <AboutCards
            title="Abrar Khan"
            src={"/images/about-us-imgs/founder4.png"}
          />
        </Founderbox>
      </Founder>

      <TestominalBox>
        <TestomialTitle>Testominals</TestomialTitle>
        <Testominal
          src={"/images/about-us-imgs/Testominal1.png"}
          title="Stacy"
          deskcription="Once we ordered some accessories items and we got the products delivered in our doorstep , the customer support was helpful and the delivered all my queries "
        />
        <Testominal
          src={"/images/about-us-imgs/Testominal2.png"}
          title="Tiffany"
          deskcription="I have ordered 5 shirts from them and recieved them with in no time.The customer was awesome"
        />
        <Testominal
          src={"/images/about-us-imgs/Testominal3.png"}
          title="James"
          deskcription="I got wrong shirt so i contacted them and they happily offered me a refund.I will surely shop from them again.   "
        />
      </TestominalBox>
    </>
  );
}
