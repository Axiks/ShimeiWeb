import logo from './logo.svg';
import './App.css';
import { Icon, Text, Container } from "atomize";
import {  Button } from "atomize";
import { Row, Col, Div } from "atomize";
import NameGen from './NameGen';
import Header from './Header';
import Futher from './Futher';

function App() {
  return ( 
  <Container d="flex" flexDir="column" align="center" justify="space-between" h="100vh">
    <Header />
    <NameGen />
    <Futher />
  </Container>
  );
}

export default App;
