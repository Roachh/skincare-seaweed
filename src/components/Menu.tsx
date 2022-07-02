import React, { useState } from "react";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IProps {
  showLinks: boolean;
}

const Nav = styled.nav<IProps>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ul {
    width: 400px;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    font-family: "Candara Light";
    font-size: 20px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  a {
    margin-right: 25px;
    transition: all 0.5s;
    &:hover {
      color: white;
      path {
        fill: white;
        transition: all 0.5s;
      }
    }
  }

  button {
    display: none;
    background: none;
    border: 0;
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    button {
      display: inline-block;
      font-size: 30px;
      z-index: 3;
    }

    ul {
      display: ${({ showLinks }) => (showLinks ? "block" : "none")};
      background-color: gray;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 2;
      padding-top: 70px;

      li {
        width: 100%;
        padding-left: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid black;

        &:not(:first-child) {
          padding-top: 50px;
        }

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default function Menu() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Nav showLinks={showLinks}>
      <button onClick={() => setShowLinks(!showLinks)}>
        <FaBars />
      </button>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">products</Link>
        </li>
        <li>
          <Link to="/">about us</Link>
        </li>
        <li>
          <Link to="/">{showLinks ? "profile" : <Profile />}</Link>
        </li>
        <li>
          <Link to="/">{showLinks ? "cart" : <Cart />}</Link>
        </li>
      </ul>
    </Nav>
  );
}
