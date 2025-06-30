/* import { Link } from "react-router-dom";
 */
const Form = () => (

    <form>

        <div className="mb-3">
            <label for="inputFullName" className="form-label">Full name</label>
            <input type="text" className="form-control" id="inputFullName" placeholder="Full name" />
        </div>

        <div className="mb-3">
            <label for="inputEmail" className="form-label" >Email address </label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
        </div>

        <div className="mb-3">
            <label for="inputPhone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="inputPhone" placeholder="Enter phone number" />
        </div>

        <div className="mb-3">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
        </div>

        <div className="position-relative">
            <button type="submit" className="btn btn-success start-50">Save contact</button>
        </div>
    </form>

);
export default Form;


