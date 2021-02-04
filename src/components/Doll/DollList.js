import React from "react";
import PropTypes from 'prop-types';
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

    React.useEffect(() => {
        setDollList(dolls);
    }, [dolls]);

    const sortDolls = (dollList, propName) => {
        const list = [...dollList];
        list.sort((a, b) => {
            var nameA = (propName === "name") ? a[propName].toUpperCase() : a[propName];
            var nameB = (propName === "name") ? b[propName].toUpperCase() : b[propName];
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        setDollList(list);
    };

    const renderList = () => {
        const renderCard = (doll) => <DollCard doll={doll} key={doll.id} />;
        return dollList.map(doll => renderCard(doll));
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
                        name="Date"
                        as="a"
                        onClick={() => sortDolls(dollList, "date")}
                    />
                    <Menu.Item
                        name="Name"
                        as="a"
                        onClick={() => sortDolls(dollList, "name")}
                    />
                </Menu.Menu>
            </Menu>
        );
    };

    return (
        <Container>
            {renderSecondaryButtons()}
            <Card.Group itemsPerRow={6} doubling stackable className="customized">
                {renderList()}
            </Card.Group>
        </Container>
    );

};

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

DollList.propTypes = {
    dolls: PropTypes.object,
    fetchDolls: PropTypes.func
};

export default connect(mapStateToProps, { fetchDolls })(DollList);