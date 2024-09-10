"use client";

import { Card } from "../../../Type";

import styled from "@emotion/styled";

import Image from "next/image";

export default function AboutCards(props: Card) {
  const Title = styled.h1`
    font-size: 1.1rem;
    font-family: system-ui;
    letter-spacing: 0.5px;
    margin: 10px;
  `;

  const Cardbox = styled.div`
    width: 18.5rem;
    margin: 12px;
    height: 23.75rem;
    text-align: justify;
  `;

  return (
    <Cardbox>
      <Image src={props.src} alt="" width={295} height={280} />
      <Title>{props.title}</Title>
    </Cardbox>
  );
}
