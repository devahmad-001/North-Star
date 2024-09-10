import React from "react";
import { Card } from "../../../../Type";

import styled from "@emotion/styled";

export default function PageContent(Props: Card) {
  const PageImg = styled.div`
    background-image: url(${Props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 98.89vw;
    height: 50vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `;

  const Title = styled.h1`
    color: white;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 50px;
  `;
  return (
    <PageImg>
      <Title>{Props.title}</Title>
    </PageImg>
  );
}
