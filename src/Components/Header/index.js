import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="px-4 py-3 bg-color d-flex justify-content-between align-items-center">
                <div className="heading font-20">CREATE EVENT</div>
                <div>
                    <button
                        type="button"
                        className="form-button btn btn-primary btn-sm"
                        onClick={this.props.createEvent}
                    >
                        CREATE
                    </button>
                    <button
                        type="button"
                        className="form-button btn btn-light btn-sm ml-4"
                        onClick={() => window.location.reload(false)}
                    >
                        RESET
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;