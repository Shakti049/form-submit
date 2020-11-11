import React, { Component } from 'react';

class ToggleSwitch extends Component {
    render() {
        const { toggle } = this.props;

        return (
            <div className="d-flex w-100 align-items-center input-form-class">
                <span>Is this a virtual Event ?</span>
                <div className="toggle-switch ml-4 mt-1" onClick={this.props.handleToggle}>
                    <div className={`circle ${ toggle ?  "transform-class" : ""}`}></div>
                </div>
                <span className="ml-3 font-medium mt-1">{ toggle ? "Yes" : "No" }</span>
            </div>
        );
    }
}

export default ToggleSwitch;