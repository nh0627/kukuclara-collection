import React from 'react';

const DollCard = prop => {

    const { doll } = prop;
    const { specialYn, img, name, type, series, date } = doll;

    const showSpecialTag = (specialYn) => {
        const specialCorner = <div class="ui yellow right corner label"><i class="star icon"></i></div>;
        return (specialYn === "Y") ? specialCorner : "";
    };

    return (
        <div className="card">
            <div className="ui fluid image">
                {showSpecialTag(specialYn)}
                <img src={img} alt="kukuclara" />
            </div>
            <div className="content">
                <div className="header">{name} {type}</div>
                <div className="meta">
                    <div className="group">{ series }</div>
                </div>
                <div class="description">released on {date}</div>
            </div>
        </div>
    );
};

export default DollCard;