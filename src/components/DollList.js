import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDoll } from '../actions';

class DollList extends Component {
    renderList() {
        return this.props.dolls.map(doll => {
            return (
                <div className="item" key={doll.kcId}>
                    <div className="right floated content">
                        <div
                            className="ui button primary"
                            onClick={() => this.props.selectDoll(doll)}>Select</div>
                    </div>
                    <div className="content">{doll.name}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { dolls: state.dolls };
}


export default connect(mapStateToProps, { selectDoll })(DollList);