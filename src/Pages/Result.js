import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

// connect
import { connect } from "react-redux";

function Result(props) {
    let history = useHistory();
    const { formData } = props;

    if ((Object.keys(formData).length === 0) && (formData.constructor === Object)) {
        history.push('/Home');
        return <></>;
    } else {
        return (
            <div>
                <div className="px-4 py-3 bg-color d-flex justify-content-between">
                    <span className="heading">
                        Event Information
                    </span>
                    <button
                        type="button"
                        className="form-button btn btn-primary btn-sm ml-4"
                        onClick={() => { formData.edit = true; history.push('/Home'); }}
                    >
                        EDIT
                    </button>
                </div>
                <div className="result-body mt-4 px-4">
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Event Title:</div> <div style={{ overflow: "auto" }}>{formData.eventTitle}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Event Name:</div> <div style={{ overflow: "auto" }}>{formData.eventName}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Category Name:</div> <div style={{ overflow: "auto" }}>{formData.categoryName}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Event Description:</div> <div style={{ overflow: "auto" }}>{formData.eventDescription}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Virtual Event:</div> <div style={{ overflow: "auto" }}>{formData.toggle ? "Yes" : "No"}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Online Link:</div> <div style={{ overflow: "auto" }}>{formData.onlineLink}</div>
                    </div>
                    <div className="data-info d-flex mb-2">
                        <div className="data-title font-regular">Uploaded File:</div> <div style={{ overflow: "auto" }}>{formData.uploadedFile[0].name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formData: state.eventReducer,
    };
};

export default connect(mapStateToProps)(Result);