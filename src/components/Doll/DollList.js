import React from "react";
import { connect } from "react-redux";
import { fetchDolls } from "../../actions";
import DollCard from "./DollCard";
import { Card, Label, Menu, Container } from "semantic-ui-react";

const DollList = props => {
    const { dolls } = props;

    const [dollList, setDollList] = React.useState([]);

    React.useEffect(() => {
        props.fetchDolls();
        setDollList(dolls);
      }, []);

    const renderCard = (doll) => {
        return (
            <DollCard doll={doll} key={doll.id} />
        );
    };

    const renderSecondaryButtons = () => {
        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    header>
                    Total <Label basic circular>{dolls.length}</Label>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item
                        name="Year"
                        as="a"
                    />
                    <Menu.Item
                        name="Name"
                        as="a"
                    />
                </Menu.Menu>
            </Menu>
        );
    };

    return (
        <Container>
            {renderSecondaryButtons()}
            <Card.Group itemsPerRow={6} doubling stackable className="customized">
                {dolls.map(doll => renderCard(doll))}
            </Card.Group>
        </Container>
    );

};

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

export default connect(mapStateToProps, { fetchDolls })(DollList);