import React from 'react';

// icon imports
import Cross from "../../Assets/Icons/x-mark.svg";

function Model(props) {
    const { data } = props;
    console.log(data);
    return (
        <div className="model-container d-flex justify-content-center">
            <div className="model-card px-4 py-3">
                <div className="data-info-heading font-medium d-flex justify-content-between">
                    <span>Data Uploaded</span>
                    <img
                        src={Cross}
                        alt="cross"
                        className="close-model"
                        onClick={() => props.model(false)}
                    />
                </div>
                <span className="data-info">
                    <span className="data-title font-regular">Event Title:</span> {data.eventTitle}
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Event Name:</span> {data.eventName}
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Category Name:</span> {data.categoryName}
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Event Description:</span> {data.eventDescription}
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Virtual Event:</span> { data.toggle ? "Yes": "No" }
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Online Link:</span> {data.onlineLink}
                </span>
                <span className="data-info">
                    <span className="data-title font-regular">Uploaded File:</span> {data.uploadedFile[0].name}
                </span>
            </div>
        </div>
    );
}

export default Model;