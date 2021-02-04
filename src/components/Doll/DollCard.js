import React from "react";
import PropTypes from 'prop-types';
import { Card, Image } from "semantic-ui-react";
import DollDetailModal from "./DollDetailModal";

const DollCard = ({ doll }) => {
    const { releaseCode, img, name, type, series, date } = doll;
    
    const renderSpecialTag = (releaseCode) => {
        const specialCorner = { corner: "left", icon: "star", color: "yellow" };
        return (releaseCode === "S") ? specialCorner : false;
    };

    const renderImage = () =>
        <Image src={img} wrapped ui={false} fluid label={renderSpecialTag(releaseCode)} />;

    return (
        <Card as="a">
            <DollDetailModal
                trigger={renderImage()}
                doll={doll} />
            <Card.Content>
                <Card.Header>{name} {type}</Card.Header>
                <Card.Meta>{series}
                </Card.Meta>
                <Card.Description>
                    <span className="date">{date}</span>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

DollCard.propTypes = {
    doll: PropTypes.object
};

export default DollCard;