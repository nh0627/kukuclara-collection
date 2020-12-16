import React from 'react';

const DollCard = prop => {

    const { doll } = prop;

    const putSpecialRibbon = (specialYn) => {
        const specialCorner = <div class="ui yellow ribbon label">Special</div>;
        return (specialYn === "Y") ? specialCorner : "";
    };

    return (
        <div className="card" key={doll.kcId}>
            <div className="ui fluid image">
                { putSpecialRibbon(doll.specialYn) }
                <img src={doll.img} alt="kukuclara" />
            </div>
            <div className="content">
                <div className="header">{doll.name} {doll.type}</div>
                <div className="meta">
                    <div className="group">{doll.series}</div>
                </div>
            </div>
            <div class="extra content">
                <span class="right floated">{doll.date}</span>
            </div>
        </div>
    );
};

export default DollCard;