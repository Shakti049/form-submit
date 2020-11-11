import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        const { type, name, title } = this.props;

        return (
            <div className="title-class input-form-class">
                <label className="font-regular">{title}</label>
                <input
                    type="text"
                    placeholder="Input a Title"
                    maxLength="100"
                    name={name}
                    value={type}
                    className="event-datalist w-100"
                    onChange={this.props.handleInput}
                />
                <div className="max-character w-100 d-flex justify-content-end">({type.length}/100)</div>
            </div>
        );
    }
}

export default InputForm;