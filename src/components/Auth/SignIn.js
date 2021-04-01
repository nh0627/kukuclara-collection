import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

let SignIn = () => {
    return (
        <Menu.Item as={Link} to="/signin">
            <Button size="mini">Sign In</Button>
        </Menu.Item>
    )
};

export default SignIn;
