import React from 'react';
import DollList from './DollList';
import DollDetail from './DollDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <DollList />
        </div>
        <div className="column eight wide">
          <DollDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
