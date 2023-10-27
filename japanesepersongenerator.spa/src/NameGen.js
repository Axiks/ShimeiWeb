import { Button, Icon, Text, Container, Row, Col, Div, Notification } from "atomize";
import React, { useState, useEffect } from "react";

function NameGen() {
    const [romanjiFullName, setRomanjiFullName] = useState(null);
    const [kanjiFullName, setKanjiFullName] = useState(null);
    const [personSex, setPersonSex] = useState(null);

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
                setPersonSex(data.sex);
            })
            .catch((error) => console.log(error));
    }

    function generateSubmit(e){
        console.log('You clicked submit.');
        getNewName();
    }

    function copyToClipboard(e){
        navigator.clipboard.writeText(romanjiFullName);
    }

  return ( 
    <Container>
      {personSex == 0 ? (
        <Text tag="h1" fontFamily="title" textColor="#DB51A1" textAlign="center" textSize="display3" m={{ b: "1rem" }}>
          {romanjiFullName}
        </Text>
      ) : (
        <Text tag="h1" fontFamily="title" textColor="#724BE3" textAlign="center" textSize="display3" m={{ b: "1rem" }}>
          {romanjiFullName}
        </Text>
      )}

      {personSex == 0 ? (
        <Text fontFamily="title" textColor="#DB51A1" textAlign="center"  m={{ b: "4rem" }}>
            {kanjiFullName}
        </Text>
      ) : (
        <Text fontFamily="title" textColor="#724BE3" textAlign="center"  m={{ b: "4rem" }}>
            {kanjiFullName}
        </Text>
      )}

    <Div d="flex" justify="center">
      <Button
        onClick={generateSubmit}
        // prefix={
        //   <Icon
        //       name="Refresh"
        //       size="20px"
        //       color="info700"
        //       m={{ r: "1rem" }}
        //   />
        //   }
        h="3rem"
        p={{ x: "1.25rem" }}
        textSize="body"
        textColor="info700"
        hoverTextColor="info900"
        bg="white"
        hoverBg="info200"

        m={{ r: "0.5rem" }}
      >
        Generate
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

        m={{ r: "0.5rem" }}
      >
        Copy
      </Button>
    </Div>
  </Container>
  );
}

export default NameGen;