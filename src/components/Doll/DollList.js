import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchDolls } from "../../actions";
import DollCard from "./DollCard";
import { Card, Label, Menu, Container, Visibility } from "semantic-ui-react";

const DollList = props => {
    const { dolls, fetchDolls } = props;
    const propDolls = dolls;

    const [dollList, setDollList] = React.useState([]);
    const [pageIndex, setPageIndex] = React.useState(0);
    const maxSize = 24;

    // When props dolls are first set
    React.useEffect(() => {
        fetchDolls();
        setDollListWithPagination(true, propDolls);
    }, []);

    // When props dolls are changed
    React.useEffect(() => {
        setDollListWithPagination(true, propDolls);
    }, [propDolls]);

    const sortDolls = ({condition}) => {
        const sortedList = [...propDolls];
        sortedList.sort((a, b) => {
            var nameA = (condition === "name") ? a[condition].toUpperCase() : a[condition];
            var nameB = (condition === "name") ? b[condition].toUpperCase() : b[condition];
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        setDollListWithPagination(true, sortedList);
    };

    const setDollListWithPagination = (isNewList, targetList) => {

        let currIndex = 0;
        if (isNewList) {
            setPageIndex(1);
        } else {
            currIndex = pageIndex;
            setPageIndex(currIndex + 1);
        }

        const list = [];
        let startNum = currIndex * maxSize;
        const lastNum = startNum + 24;
        for (startNum; startNum < lastNum; ++startNum) {
            let doll = targetList[startNum];
            if (typeof doll !== "undefined") list.push(doll);
            else continue;
        }

        const paginatedDolls = isNewList ? [...list] : [...dollList, ...list];
        setDollList(paginatedDolls);
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
                        onClick={() => sortDolls({ condition: "date" })}
                    />
                    <Menu.Item
                        name="Name"
                        as="a"
                        onClick={() => sortDolls({ condition: "name" })}
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
                    onBottomVisible={() => {
                        if (pageIndex * maxSize < propDolls.length) setDollListWithPagination(false, propDolls);
                    }}
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