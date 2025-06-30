import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";

export const NewContact = () => {
    return (
        <div className="container-fluid">

            <div className="row mt-3 mb-5">
                <div className="col-1"></div>
                <div className="col-10 text-center">
                    <h1>Add a new contact</h1>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row mb-5">
                <div className="col-2"></div>
                <div className="col-8">
                    <Form />
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row mb-5">
                <div className="col-6"></div>
                <div className="col-6">
                    <NavLink to="/">
                        <span>Back home</span>
                    </NavLink>
                </div>
                <div className="col-6"></div>
            </div>

        </div>
    );
};
