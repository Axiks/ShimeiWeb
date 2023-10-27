import { Icon, Text, Container, Anchor, Tag } from "atomize";

function Futher() {
    return ( 
    <Container justify="center" align="center" d="flex" h="5rem">
        <Text d="flex" fontFamily="footer">
            Japanese name generator; 2023; Created by 
        </Text>
        <Anchor href="https://github.com/Axiks" target="_blank" d="flex">
            <Tag
                hoverBg="info200"
                m={{ l: "0.2rem", r: "0.2rem" }}
                cursor="pointer"
                fontFamily="footer"
            >
                Yuno
            </Tag>
        </Anchor>
    </Container>
    );
  }
  
  export default Futher;