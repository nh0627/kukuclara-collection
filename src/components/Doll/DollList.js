import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDolls } from '../../actions';
import DollCard from './DollCard';

class DollList extends Component {

    componentDidMount() {
        this.props.fetchDolls();
    }

    renderList() {
        return this.props.dolls.map(doll => { return <DollCard doll={doll} key={doll.kcId} />; });
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
    return { dolls: Object.values(state.doll) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);