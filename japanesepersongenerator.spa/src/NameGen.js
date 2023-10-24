import { Button, Icon, Text, Container, Row, Col, Div } from "atomize";
import React, { useState, useEffect } from "react";

function NameGen() {
    const [romanjiFullName, setRomanjiFullName] = useState(null);
    const [kanjiFullName, setKanjiFullName] = useState(null);

    useEffect(() => {
        getNewName();
    }, []);

    function getNewName() {
        fetch("https://shimeiapi.neko3.space/api/Person/getFullName", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                var romName = data.name.romanjiName.charAt(0).toUpperCase() + data.name.romanjiName.slice(1);
                var romSurname = data.surname.romanjiName.charAt(0).toUpperCase() + data.surname.romanjiName.slice(1);
                setRomanjiFullName(romName + ' ' + romSurname);
                setKanjiFullName(data.kanjiFullName);
            })
            .catch((error) => console.log(error));
    }

    function generateSubmit(e){
        console.log('You clicked submit.');
        getNewName();
    }

    function copyToClipboard(e){
        navigator.clipboard.writeText(romanjiFullName)
    }

  return ( 
    <Container>
    <Text tag="h1" textColor="#724BE3" textAlign="center" textSize="display3" m={{ b: "1rem" }}>
      {romanjiFullName}
    </Text>
    <Text textColor="#724BE3" textAlign="center"  m={{ b: "4rem" }}>
        {kanjiFullName}
    </Text>
    <Div d="flex" justify="center">
      <Button
        onClick={generateSubmit}
        h="3rem"
        p={{ x: "1.25rem" }}
        textSize="body"
        textColor="info700"
        hoverTextColor="info900"
        bg="white"
        hoverBg="info200"
        border="1px solid"
        borderColor="info700"
        hoverBorderColor="info900"
        m={{ r: "0.5rem" }}
      >
        Geneate
      </Button>
      <Button
        onClick={copyToClipboard}
        h="3rem"
        p={{ x: "1.25rem" }}
        textSize="body"
        textColor="info700"
        hoverTextColor="info900"
        bg="white"
        hoverBg="info200"
        border="1px solid"
        borderColor="info700"
        hoverBorderColor="info900"
        m={{ r: "0.5rem" }}
      >
        Copy
      </Button>
        </Div>
  </Container>
  );
}

export default NameGen;