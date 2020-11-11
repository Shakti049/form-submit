import React, { Component } from 'react';

class UploadData extends Component {
    
    render() {
        const { name } = this.props;

        return (
            <div className="attachment">
                <label>Attachment *</label>
                <input
                    type="file"
                    name={name}
                    onChange={this.props.handleInput}
                    style={{ display: "block" }}
                />
            </div>
        );
    }
}

export default UploadData;