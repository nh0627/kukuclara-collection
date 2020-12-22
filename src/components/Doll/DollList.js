import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDolls } from '../../actions';
import DollCard from './DollCard';
import { Card } from 'semantic-ui-react';

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
            <Card.Group itemsPerRow={4}>
                {this.renderList()}
            </Card.Group>
        );
    }
}

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);