import React from 'react';
import DollList from './Doll/DollList';
import MenuBar from './UI/MenuBar';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div>
      <Container>
        <MenuBar />
        <DollList />
      </Container>
    </div>
  );
};

export default App;
