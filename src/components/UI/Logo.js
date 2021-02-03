import React from "react";
import { Image, Container } from "semantic-ui-react";

const Logo = () => {
    return (
        <Container as="a" href="/">
            <Image src={process.env.PUBLIC_URL + "/logo.png"} size="small" circular centered />
        </Container>
    );
};

export default Logo;