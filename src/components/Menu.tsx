import React, { useState } from "react";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

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

  button {
    display: none;
    background: none;
    border: 0;
  }

  @media (max-width: 1200px) {
    button {
      display: inline;
    }
    ul,
    a {
      display: none;
    }
  }
`;

export default function Menu() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Nav className={`${showLinks ? "active" : ""}`}>
      <ul>
        <li>
          <a href="/"> home</a>
        </li>
        <li>
          <a href="/">products</a>
        </li>
        <li>
          <a href="/">about us</a>
        </li>
      </ul>
      <a href="/">
        <Profile />
      </a>
      <a href="/">
        <Cart />
      </a>
      <button onClick={() => setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </Nav>
  );
}
