import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const DollCard = prop => {

    const { doll } = prop;
    const { specialYn, img, name, type, series, date } = doll;

    const showSpecialTag = (specialYn) => {
        const specialCorner = { as: "a", corner: "left", icon: "star", color: "yellow" };
        return (specialYn === "Y") ? specialCorner : false;
    };

    return (
        <Card>
            <Image src={img} wrapped ui={false} fluid label={showSpecialTag(specialYn)} />
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