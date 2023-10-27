import { Button, Icon, Text, Container, Row, Col, Div, Anchor } from "atomize";
import React, { useState, useEffect } from "react";

function Header() {
    return(
        <Container justify="space-between" align="center" d="flex" h="5rem">
            <Text textSize="heading" d="flex">Shimei Gen</Text>
            <Anchor href="https://github.com/Axiks/ShimeiWeb" target="_blank" d="flex">
                <Button
                    prefix={
                    <Icon
                        name="Github"
                        size="20px"
                        color="white"
                        m={{ r: "1rem" }}
                    />
                    }
                    cursor="pointer"
                    rounded="md"
                    shadow="3"
                    hoverShadow="4"
                >
                    <Text>GitHub</Text>
                </Button>
            </Anchor>
        </Container>
    )
}

export default Header;