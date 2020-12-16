import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDoll } from '../../actions';
import DollCard from './DollCard';

class DollList extends Component {
    renderList() {
        return this.props.dolls.map(doll => { return <DollCard doll={doll} />; });
    }

    render() {
        return (
            <div className="ui main container">
                <div className="ui four cards">
                    { this.renderList() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { dolls: state.dolls };
}


export default connect(mapStateToProps, { selectDoll })(DollList);