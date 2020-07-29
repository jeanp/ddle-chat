import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Chat from "./modules/Chat";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    font-family: Arial;
  }
`;

const theme = {
  toolbar: {
    backgroundColor: "#1e8eca",
    inputBorderColor: "#1d6c97",
    sendButton: {
      disabledColor: "#eaa1a1",
      hoverColor: "blue",
      color: "white ",
      backgroundColor: "#ff7b66",
    },
  },
  messageBalloon: {
    ownMessageBackgroundColor: "#fff4c1",
    messageBackgroundColor: "white",
    borderColor: "#e3e3e3",
    fromColor: "#a9b4bb",
    timestampColor: "#a9b4bb",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Chat />
    </ThemeProvider>
  );
}

export default App;
