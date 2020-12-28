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
        return this.props.dolls.map(doll => {
            return (
                <DollCard doll={doll} key={doll.id} />
            );
        });
    }

    render() {
        return (
            <Card.Group itemsPerRow={4} doubling stackable>
                {this.renderList()}
            </Card.Group>
        );
    }
}

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);