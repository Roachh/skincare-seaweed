import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import "./fonts/Candara.ttf";
import "./fonts/Candara Light.ttf";
import Hero from "./components/Hero";

// Global Styles

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Candara';
    src: local("Candara"),
    url("./fonts/Candara.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Candara Light';
    src: local("Candara Light"),
    url("./fonts/Candara Light.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;   
    margin: 0;
    padding: 0; 
  }

  body {
    font-family: Candara;
    margin: 0;
  }
`;

// Theme

const theme = {
  textColor: "rgba(0, 0, 0, 0.7)",
};

// Components

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
