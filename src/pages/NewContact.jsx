/* import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; */

import Form from "../components/Form";

import { NavLink } from "react-router-dom";

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
                    <Form></Form>

                </div>
                <div className="col-2"></div>

            </div>

            <div className="row mb-5">

                <div className="col-6"></div>
                <div className="col-6">
                    <div>
                        <NavLink to="/">
                            <button className="btn btn-primary">Back home</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6"></div>

            </div>

        </div>

    );
}; 