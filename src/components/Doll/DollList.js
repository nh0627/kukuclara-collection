import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDolls } from "../../actions";
import DollCard from "./DollCard";
import { Card, Label } from "semantic-ui-react";

class DollList extends Component {

    componentDidMount() {
        this.props.fetchDolls();
    }

    renderCard(doll) {
        return (
            <DollCard doll={doll} key={doll.id} />
        );
    }

    renderTotalAndSort() {
        return (
            <div style={{"marginBottom": "1rem"}}>
                Total <Label basic circular>{this.props.dolls.length}</Label>
                <div style={{ "float": "right" }}>
                    <Label as="a"> Year </Label>
                    <Label as="a"> Name </Label>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderTotalAndSort()}
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