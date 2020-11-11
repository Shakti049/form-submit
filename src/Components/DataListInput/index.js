import React, { Component } from 'react';

class DataList extends Component {
    render() {
        const { list, type, name, title, selectedList } = this.props;
        
        return (
            <div className="event-class input-form-class">
                <label className="font-regular">{title}</label>
                <input
                    type="text"
                    list={selectedList}
                    placeholder="Select Event"
                    maxLength="100"
                    name={name}
                    value={type}
                    className="event-datalist w-100"
                    onChange={this.props.handleInput}
                />
                <datalist id={selectedList} style={{ width: "100%" }}>
                    {
                        list.map((item, index) => {
                            return (
                                <option key={`Event${index}`}>{item.title}</option>
                            )
                        })
                    }
                </datalist>
                <div className="max-character w-100 d-flex justify-content-end">({type.length}/100)</div>
            </div>
        );
    }
}

export default DataList;