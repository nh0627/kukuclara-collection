import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDolls } from '../../actions';
import DollCard from './DollCard';

class DollList extends Component {

    componentDidMount() {
        this.props.fetchDolls();
    }

    renderList() {
        return this.props.dolls.map(doll => { return <DollCard doll={doll} key={doll.id} />; });
    }

    render() {
        // Todo: 화면 너비에 맞게 자동 조정
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
    return { dolls: Object.values(state.dolls) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);