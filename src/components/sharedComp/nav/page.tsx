"use client";

import Image from "next/image";

import styled from "@emotion/styled";

import Link from "next/link";

export default function Nav() {
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 30px;
    text-align: center;
    align-items: baseline;
    flex-wrap: wrap;
    background-color: #f2f2f299;
    border-radius: 5px;
  `;

  const OL = styled.ol`
    list-style-type: none;
    display: flex;
  `;
  const Li = styled.li`
    margin: 10px;
    font-weight: 500;
    color: black;
  `;

  return (
    <>
      <Nav>
        <Image
          src={"/images/nav-imgs/Northstar.png"}
          width={153}
          height={28}
          alt=""
        />
        <OL>
          <Link href="/">
            <Li>Home</Li>
          </Link>
          <Link href="/about">
            <Li style={{ color: "rgb(41 124 181)" }}>About</Li>
          </Link>
          <Link href="/contact-us">
            <Li>Contact US</Li>
          </Link>
        </OL>

        <OL>
          <Li>
            <Image
              src={"/images/nav-imgs/user 1.png"}
              width={24}
              height={25}
              alt=""
            />
          </Li>
          <Li>
            <Image
              src={"/images/nav-imgs/shopping-bag 1.png"}
              width={24}
              height={25}
              alt=""
            />
          </Li>
        </OL>
      </Nav>
    </>
  );
}
