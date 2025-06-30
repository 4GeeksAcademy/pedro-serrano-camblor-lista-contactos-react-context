import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import { NavLink } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container-fluid">

			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 text-center">
					<div>
						<NavLink to="/newcontact">
							<button className="btn btn-primary">Create new contact</button>
						</NavLink>
					</div>
				</div>{/*  */}
				<div className="col-2 "></div>
			</div>

			<div className="row">
				<div className="col-1"></div>
				<div className="col-10">
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>
				<div className="col-1"></div>
			</div>

		</div>

	);
}; 