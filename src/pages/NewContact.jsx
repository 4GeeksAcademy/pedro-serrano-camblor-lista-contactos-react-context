/* import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; */
import { Link } from "react-router-dom";
import Form from "../components/Form";

export const NewContact = () => {

    /* const { store, dispatch } = useGlobalReducer() */

    return (
        <div>
            <Form></Form>
            <div className="ml-auto">
                <Link to="/">
                    <button className="btn btn-primary">Go Home</button>
                </Link>
            </div>
        </div>

    );
}; 