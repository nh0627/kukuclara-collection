import React from "react";
import { Card, Image } from "semantic-ui-react";
import DollDetailModal from "./DollDetailModal";

const DollCard = ({ doll }) => {
    const { isSpecialCode, img, name, type, series, date } = doll;

    const showSpecialTag = (isSpecial) => {
        const specialCorner = { as: "a", corner: "left", icon: "star", color: "yellow" };
        return (isSpecial === "Y") ? specialCorner : false;
    };

    return (
        <Card>
            <DollDetailModal
                trigger={<Image src={img} wrapped ui={false} fluid label={showSpecialTag(isSpecialCode)} />}
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

export default DollCard;