import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDolls } from "../../actions";
import DollCard from "./DollCard";
import { Card, Label, Menu } from "semantic-ui-react";

class DollList extends Component {

    componentDidMount() {
        this.props.fetchDolls();
    }

    renderCard(doll) {
        return (
            <DollCard doll={doll} key={doll.id} />
        );
    }

    renderSecondaryButtons() {
        return (
            <Menu secondary style={{ "marginBottom": "1rem" }}>
                <Menu.Item
                    name='home'
                    header>
                    Total <Label basic circular>{this.props.dolls.length}</Label>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item
                        name="Year"
                    />
                    <Menu.Item
                        name="Name"
                    />
                </Menu.Menu>
            </Menu>
        );
    }

    render() {
        return (
            <div>
                {this.renderSecondaryButtons()}
                <Card.Group itemsPerRow={6} doubling stackable className="customized">
                    {this.props.dolls.map(doll => this.renderCard(doll))}
                </Card.Group>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);