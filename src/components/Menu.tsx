import React from "react";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ul {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    font-family: "Candara Light";
    font-size: 20px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  &:hover {
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
`;

export default function Menu() {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#"> home</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
      </ul>
      <a href="#">
        <Profile />
      </a>
      <a href="#">
        <Cart />
      </a>
    </Nav>
  );
}
