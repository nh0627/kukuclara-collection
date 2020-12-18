import React from 'react';

const DollCard = prop => {

    const { doll } = prop;
    const { specialYn, img, name, type, series, date } = doll;

    const putSpecialRibbon = (specialYn) => {
        const specialCorner = <div className="ui yellow ribbon label">Special</div>;
        return (specialYn === "Y") ? specialCorner : "";
    };

    return (
        <div className="card">
            <div className="ui fluid image">
                {putSpecialRibbon(specialYn)}
                <img src={img} alt="kukuclara" />
            </div>
            <div className="content">
                <div className="header">{name} {type}</div>
                <div className="meta">
                    <div className="group">{series}</div>
                </div>
            </div>
        </div>
    );
};

export default DollCard;