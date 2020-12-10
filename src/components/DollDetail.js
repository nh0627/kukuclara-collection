import React from 'react';
import { connect } from 'react-redux';

const DollDetail = ({ doll }) => {
  if (!doll) {
    return <div>Select a doll</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Series: {doll.forest}
        <br />
        Picture: {doll.img}
        <br />
        Name: {doll.name}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { doll: state.selectedDoll };
};

export default connect(mapStateToProps)(DollDetail);
