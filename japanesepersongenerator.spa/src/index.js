import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset, Container } from 'atomize';
import { Row, Col, Div } from "atomize";


const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
  fontFamily: {
    //primary: "fixel",
  }
};

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
// 1. Create a client engine instance
const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={theme}>
      <Div bg="#FAF3FF">
        <App />
      </Div>
    </ThemeProvider>
  </StyletronProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
