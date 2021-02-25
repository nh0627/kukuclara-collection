import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchDolls } from "../../store/actions";
import DollCard from "./DollCard";
import { Card, Label, Menu, Container, Visibility } from "semantic-ui-react";

const DollList = props => {
    const propDolls = props.dolls;

    const [dolls, setDolls] = React.useState([]);
    const [pageIndex, setPageIndex] = React.useState(0);
    const [sortCondition, setSortCondition] = React.useState("date");

    // When dolls in store are first set
    React.useEffect(() => {
        props.fetchDolls();
        setDollsWithPagination();
    }, []);

    // When dolls in store are changed
    React.useEffect(() => {
        setDollsWithPagination();
    }, [propDolls]);

    // When sort condition is changed
    React.useEffect(() => {
        setDollsWithPagination();
    }, [sortCondition]);

    const sortDolls = () => {
        const sortedList = [...propDolls];
        sortedList.sort((a, b) => {
            var nameA = (sortCondition === "name") ? a[sortCondition].toUpperCase() : a[sortCondition];
            var nameB = (sortCondition === "name") ? b[sortCondition].toUpperCase() : b[sortCondition];
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        return sortedList;
    };

    const setDollsWithPagination = (isNewList = true) => {
        const maxSize = 12;
        let currIndex = 0;
        let sortedDolls = sortDolls();

        if (isNewList) {
            setPageIndex(1);
        } else {
            currIndex = pageIndex;
            setPageIndex(currIndex + 1);
        }

        const list = [];
        let startNum = currIndex * maxSize;
        const lastNum = startNum + maxSize;
        for (startNum; startNum < lastNum; ++startNum) {
            let doll = sortedDolls[startNum];
            if (typeof doll !== "undefined") list.push(doll);
            else continue;
        }

        const paginatedDolls = isNewList ? [...list] : [...dolls, ...list];
        setDolls(paginatedDolls);
    };

    const renderList = () => {
        const renderCard = (doll) => <DollCard doll={doll} key={doll.id} />;
        return dolls.map(doll => renderCard(doll));
    };

    const renderSecondaryButtons = () => {
        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    header>
                    Total <Label basic circular>{propDolls.length}</Label>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item
                        name="Date"
                        as="a"
                        active={sortCondition === "date"}
                        onClick={() => setSortCondition("date")}
                    />
                    <Menu.Item
                        name="Name"
                        as="a"
                        active={sortCondition === "name"}
                        onClick={() => setSortCondition("name")}
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
                <Visibility
                    onBottomVisible={() => setDollsWithPagination(false)}
                    once={false}
                />
            </Card.Group>
        </Container>
    );

};

const mapStateToProps = state => {
    return { dolls: Object.values(state.dolls) };
}

DollList.propTypes = {
    dolls: PropTypes.array,
    fetchDolls: PropTypes.func
};

export default connect(mapStateToProps, { fetchDolls })(DollList);