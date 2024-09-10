"use client";

import Cards from "./homePageCards/Card";

import styled from "@emotion/styled";

import Deskcription from "./deskcriptionCard/Deskcription";
import Discount from "./discountCard/Discount";
import Btn from "../sharedComp/btnShopNow/btn";

export default function Homepage() {
  const Title = styled.h1`
    font-size: 1.7rem;
    font-weight: 700;
    font-family: sans-serif;
    text-align: center;
  `;

  const HomeImg = styled.div`
    background-image: url("/images/home-page-imgs/home.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const CardDeskcription = styled.p`
    font-size: 1rem;
    color: grey;
    text-align: center;
  `;

  const Cardcontainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const DeskcriptionDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const DiscountCardDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 30px;
  `;

  const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `;

  const HomePicbox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-inline: 150px;
  `;

  const PicboxBtn = styled.button`
    width: 8rem;
    height: 3rem;
    font-size: 1.1rem;
    font-family: sans-serif;
    font-weight: 500;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    margin: 10px;
  `;

  const HomePara = styled.h1`
    color: white;
  `;

  return (
    <HomePage>
      <HomeImg>
        <HomePicbox>
          <HomePara>
            STYLIST PICS BEAT <br /> THE HEAT
          </HomePara>
          <PicboxBtn>SHOP NOW</PicboxBtn>
        </HomePicbox>
      </HomeImg>

      <Title>Discover New Arrivals</Title>
      <CardDeskcription>Recently Added shirts!</CardDeskcription>
      <Cardcontainer>
        <Cards
          title="Plain Shirt"
          price="$29.00"
          src={"/images/home-page-imgs/1.png"}
        />
        <Cards
          title="Denim Jacket"
          price="$79.00"
          src={"/images/home-page-imgs/2.png"}
        />
        <Cards
          title="Polo Shirt"
          price="$39.00"
          src={"/images/home-page-imgs/3.png"}
        />
        <Cards
          title="BlueSweat Shirt"
          price="$33.00"
          src={"/images/home-page-imgs/4.png"}
        />
        <Cards
          title="Outcast T Shirt"
          price="$36.00"
          src={"/images/home-page-imgs/5.png"}
        />
        <Cards
          title="Polo Plain Shirt"
          price="$51.00"
          src={"/images/home-page-imgs/6.png"}
        />
        <Cards
          title="Blue Plain Shirt"
          price="$44.00"
          src={"/images/home-page-imgs/7.png"}
        />
        <Cards
          title="Dark Blue Shirt"
          price="$42.00"
          src={"/images/home-page-imgs/8.png"}
        />
      </Cardcontainer>

      <DeskcriptionDisplay>
        <Deskcription
          src={"/images/home-page-imgs/icon 1.png"}
          title="FREE SHIPPING "
          deskcription="Enjoy free shipping above all orders above $100"
        />
        <Deskcription
          src={"/images/home-page-imgs/icon 2.png"}
          title="SUPPORT 24/7 "
          deskcription="Our support is there to help you for queries"
        />
        <Deskcription
          src={"/images/home-page-imgs/icon 3.png"}
          title="30 DAYS RETURN  "
          deskcription="Simply return it within 30 days for an exchange"
        />
        <Deskcription
          src={"/images/home-page-imgs/icon 4.png"}
          title="100% PAYMENT SECURE "
          deskcription="Our payments are secured with 256 bit encription "
        />
      </DeskcriptionDisplay>

      <DiscountCardDisplay>
        <Discount
          title="PEACE OF MIND"
          deskcription="A one-stop platform for all your fashion needs,hassle-free"
          src="Buy with a peace of mind"
          btncolor=" #024E82"
          btntext="BUY NOW"
        />
        <Discount
          title="BUY 2 GET 1 FREE"
          deskcription="End of season sale.Buy any two items of your choice"
          src="and get 1 free"
          btncolor=" #024E82"
          btntext="BUY NOW"
        />
      </DiscountCardDisplay>

      <Title>Top Sellers</Title>
      <CardDeskcription>Browse Our top selling products!</CardDeskcription>
      <Cardcontainer>
        <Cards
          title="Grey polo Shirt "
          price="$49.00"
          src={"/images/home-page-imgs/Rectangle 1.png"}
        />
        <Cards
          title="Red Shirt"
          price="$69.00"
          src={"/images/home-page-imgs/Rectangle 2.png"}
        />
        <Cards
          title="White Shirt"
          price="$29.00"
          src={"/images/home-page-imgs/Rectangle 3.png"}
        />
        <Cards
          title="Pink Casual Shirt"
          price="$39.00"
          src={"/images/home-page-imgs/Rectangle 4.png"}
        />
      </Cardcontainer>

      <Btn bgcolor="#024E82" btntext="BUY NOW" btncolor="white" />
    </HomePage>
  );
}
