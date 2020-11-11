import React from 'react';

// icon imports
import Attention from "../../Assets/Icons/warning.svg";
import Cross from "../../Assets/Icons/x-mark.svg";

function SnackBar(props) {
    const { snackBar } = props;

    return (
        <div
            className={`snackbar font-regular`}
            style={ snackBar ? { display: "block" } : { display: "none" }}
        >
            <div className="d-flex align-items-center px-3 h-100">
                <img src={Attention} alt="attention" className="attention"/>
                <span className="ml-3">Please fill all the mendatory fields</span>
                <img
                    src={Cross}
                    alt="cross"
                    className="attention ml-3 xcross"
                    onClick={() => props.closeSnackBar(false)}
                />
            </div>
        </div>
    );
}

export default SnackBar;