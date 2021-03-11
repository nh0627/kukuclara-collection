import React from "react";
import PropTypes from 'prop-types';
import { Card, Image, Placeholder } from "semantic-ui-react";
import DollDetailModal from "./DollDetailModal";

const DollCard = ({ doll }) => {
    const { releaseCode, img, name, type, series, date } = doll;
    const [loading, setLoading] = React.useState(true);

    const renderSpecialTag = (releaseCode) => {
        const specialCorner = { corner: "left", icon: "star", color: "yellow" };
        return (releaseCode === "S") ? specialCorner : false;
    };

    const renderImageWithPlaceHolder = () => {
        const renderPlaceHolder = () => loading ?
            <Placeholder>
                <Placeholder.Image square />
            </Placeholder> : null;

        const renderImage = () =>
            <Image src={img} wrapped ui={false} fluid
                label={renderSpecialTag(releaseCode)}
                onLoad={() => setLoading(false)}
                style={loading ? { display: "none" } : {}} />;

        return (
            <React.Fragment>
                {renderPlaceHolder()}
                {renderImage()}
            </React.Fragment>
        );
    }

    const renderCard = () => {
        return (
            <Card as="a">
                {renderImageWithPlaceHolder()}
                <Card.Content>
                    <Card.Header>{name} {type}</Card.Header>
                    <Card.Meta>{series}
                    </Card.Meta>
                    <Card.Description>
                        <span className="date">{date}</span>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    };

    return (
        <DollDetailModal
            doll={doll}
            trigger={renderCard()}
        />
    );
};

DollCard.propTypes = {
    doll: PropTypes.object
};

export default DollCard;