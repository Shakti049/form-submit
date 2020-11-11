import React from 'react';

import { useSelector, useDispatch } from "react-redux";

// action import
import { createEvent } from '../../Redux/action';

function Header(props) {

    const count = useSelector(state => state.eventReducer);
    const dispatch = useDispatch();
    // console.log(count)
    
    return (
        <div className="px-4 py-3 bg-color d-flex justify-content-between align-items-center">
            <div className="heading font-20">CREATE EVENT</div>
            <div>
                <button
                    type="button"
                    className="form-button btn btn-primary btn-sm"
                    onClick={props.createEvent}
                >
                    CREATE
                </button>
                <button
                    type="button"
                    className="form-button btn btn-light btn-sm ml-4"
                    onClick={() => window.location.reload()}
                    // onClick={() => dispatch(createEvent())}
                >
                    RESET
                </button>
            </div>
        </div>
    );
}

export default Header;