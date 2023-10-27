import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
