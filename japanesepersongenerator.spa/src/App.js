import logo from './logo.svg';
import './App.css';
import { Icon, Text, Container } from "atomize";
import {  Button } from "atomize";
import { Row, Col, Div } from "atomize";
import NameGen from './NameGen';

function App() {
  return ( 
  <Container d="flex" flexDir="column" align="center" justify="center" h="100vh">
        {/* <Text textSize="display3" m={{ b: "1rem" }}>
        Kokoroaoi Imae  
        </Text> */}
    <NameGen />
  </Container>
  );
}

export default App;
