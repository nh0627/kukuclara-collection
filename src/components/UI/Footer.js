import React from "react";
import { Segment, Container, List } from "semantic-ui-react";
import DevNote from "./DevNote";

const Footer = props => {

    return (
        <Segment inverted style={{ margin: "4em 0em 0em", padding: "4em 0em" }} vertical>
            <Container textAlign="center">
                <List horizontal inverted divided link size="small">
                    <DevNote
                        trigger={<List.Item as="a" >Dev Note👩‍💻</List.Item>} />
                    <List.Item as="a" href="mailto:tyttonova@gmail.com">Email Me💖</List.Item>
                </List>
                <p>Kukuclara Collection is a fan-made website and is in no way affiliated with <a href="http://kukuclara.com/" target="_blank" rel="noreferrer" >KUKUCLARA</a>.</p>
            </Container>
        </Segment>
    );
};

export default Footer;