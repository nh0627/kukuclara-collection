import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDoll } from '../../actions';

class DollList extends Component {
    renderList() {
        return this.props.dolls.map(doll => {
            return (
                <div className="card" key={doll.kcId}>
                    <div className="image">
                        <img src={doll.img} alt="kukuclara"/>
                    </div>
                    <div className="content">
                        <div className="header">{doll.name} {doll.type}</div>
                        <div className="meta">
                            <div className="group">{doll.series}</div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui main container">
                <div className="ui four cards">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { dolls: state.dolls };
}


export default connect(mapStateToProps, { selectDoll})(DollList);