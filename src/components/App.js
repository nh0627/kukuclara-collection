import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import DollList from './Doll/DollList';
import Menu from './UI/Menu';
// import DollDetail from './DollDetail';

const App = () => {
  return (
    <div>
      <Menu />
      <DollList />
    </div>
  );
}; 

export default App;
