import React from "react";
import DollList from "./Doll/DollList";
import MenuBar from "./UI/MenuBar";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const mainListStyle = {"marginTop": "4.5rem"};
  return (
    <div>
      <MenuBar />
      <Container style={mainListStyle}>
        <DollList />
      </Container>
    </div>
  );
};

export default App;
