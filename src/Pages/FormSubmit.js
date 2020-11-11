import React, { Component } from 'react';

// Dummy data imports
import { eventType, categoryType } from '../Fixtures/dummyData.js';

// component imports
import Header from '../Components/Header';
import InputForm from '../Components/InputForm/index.js';
import ToggleSwitch from '../Components/ToggleSwitch/index.js';
import DataList from '../Components/DataListInput';
import UploadData from "../Components/UploadInput";

// CSS style sheet import
import "../StyleSheet/css/main.css";
import SnackBar from '../Components/Snackbar/index.js';

class FormSubmit extends Component {
    state = {
        eventName: "",
        eventTitle: "",
        categoryName: "",
        eventDescription: "",
        toggle: false,
        onlineLink: "",
        uploadedFile: [],
        snackBar: false
    };

    handleInput = (event) => {
        const { name, value, files, type } = event.target;
        this.setState({
            [name]: type !== "file" ? value : files,
        }, () => console.log(name, this.state[name], value));
    };

    handleToggle = () => {
        const { toggle } = this.state;

        this.setState({
            toggle: !toggle,
        }, () => console.log("input-form", this.state.toggle));
    };

    closeSnackBar = (state) => {
        this.setState({
            snackBar: state,
        });
    };

    createEvent = () => {
        if (( this.state.eventName && this.state.eventTitle && this.state.categoryName ) === ""
            || (Array.isArray(this.state.uploadedFile) && this.state.uploadedFile.length === 0)
        ) {
            this.closeSnackBar(true);
        } else {
            alert("From Successfully Uploaded");
        }
    };

    render() {
        const {
            eventName,
            eventTitle,
            categoryName,
            eventDescription,
            toggle,
            onlineLink,
            snackBar,
            uploadedFile,
        } = this.state;

        if (snackBar) {
            setTimeout(() => {
                this.closeSnackBar();
            }, 1500);
        }

        return (
            <div className="form-container">
                <Header
                    createEvent={this.createEvent}
                />
                <div className="form-body mt-3 px-3 py-4">
                    <DataList
                        list={eventType}
                        type={eventName}
                        name={"eventName"}
                        title={"Add Event *"}
                        selectedList={"events"}
                        handleInput={this.handleInput}
                    />
                    <InputForm
                        type={eventTitle}
                        name={"eventTitle"}
                        title={"Title *"}
                        handleInput={this.handleInput}
                    />
                    <DataList
                        list={categoryType}
                        type={categoryName}
                        name={"categoryName"}
                        title={"Select Category *"}
                        selectedList={"categories"}
                        handleInput={this.handleInput}
                    />
                    <div className="title-class input-form-class">
                        <label className="font-regular" style={{ display: "block" }}>Description</label>
                        <textarea
                            className="textarea-input w-100 pt-1 mt-1"
                            name="eventDescription"
                            placeholder="Short Summary"
                            maxLength="500"
                            value={eventDescription}
                            onChange={this.handleInput}
                        />
                        <div className="max-character w-100 d-flex justify-content-end">
                            ({eventDescription.length}/500)
                        </div>
                    </div>
                    <ToggleSwitch
                        toggle={toggle}
                        handleToggle={this.handleToggle}
                    />
                    <InputForm
                        type={onlineLink}
                        name={"onlineLink"}
                        title={"Online Link"}
                        handleInput={this.handleInput}
                    />
                    <UploadData
                        name={"uploadedFile"}
                        type={uploadedFile}
                        handleInput={this.handleInput}
                    />
                </div>
                <SnackBar
                    snackBar={snackBar}
                    closeSnackBar={this.closeSnackBar}
                />
            </div>
        );
    }
}

export default FormSubmit;