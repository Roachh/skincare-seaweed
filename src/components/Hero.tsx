import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import left from "../images/left.png";
import right from "../images/right.png";
import background from "../images/background.png";

const HeroSection = styled.section`
  color: ${({ theme }) => theme.textColor};
  min-height: 100vh;
  padding: 25px 40px;

  /* Pseudo-elemento para poder adicionar filter no background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: saturate(0) brightness(70%);
    z-index: -9999;
  }
`;

const Main = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 900px;
  height: 500px;
  padding: 40px 170px;
  background: linear-gradient(
    116.63deg,
    rgba(255, 255, 255, 0.5) 2.76%,
    rgba(255, 255, 255, 0) 105.5%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(5px);
  border-radius: 10px;
  font-weight: 400;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 40px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 400px;
    left: 0;
    transform: translate(-50%, -30%);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    background-size: cover;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1px 60px 20px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-image: url(${left});
    filter: saturate(0) brightness(80%);
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 400px;
    right: 0;
    bottom: 0;
    transform: translate(50%, 25%);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1px 60px 20px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-size: cover;
    background-image: url(${right});
    background-position-x: 50%;
    filter: saturate(0) brightness(80%);
  }

  &::before,
  &::after {
    @media (max-width: 1200px) {
      content: none;
    }
  }

  h1 {
    font-size: 44px;
    font-weight: 400;

    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 27px;
    font-family: "Candara Light";
    color: black;

    @media (max-width: 1200px) {
      font-size: 20px;
    }
  }
  span {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    font-size: 14px;
    font-family: "Candara Light";
  }

  button {
    font-weight: 700;
    padding: 12px 40px;
    background: linear-gradient(
      94.62deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(217, 217, 217, 0) 100%
    );
    border: 1px solid #ffffff;
    border-radius: 20px;
    transition: all 0.5s;
    font-size: 30px;
    color: #373737;
    transition: 0.3s;
    background-size: 1px 200px;
    margin-bottom: 20px;

    &:hover {
      cursor: pointer;
      color: white;
    }

    &:active {
      background-position: 100px;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Menu />
      <Main>
        <h1>We bring nature to your beauty routine</h1>
        <p>
          Discover the secret of natural beauty and take care of your skin with
          cosmetics made from seaweed
        </p>
        <span>100% organic and cruelty free.</span>
        <button>shop now</button>
      </Main>
    </HeroSection>
  );
}
