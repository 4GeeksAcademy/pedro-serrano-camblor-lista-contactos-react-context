import React, { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import { NavLink } from "react-router-dom";

export const Home = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	function getContacts() {
		fetch("https://playground.4geeks.com/contact/agendas/pedro-sc/contacts")
			.then((res) => res.json())
			.then((data) => {
				if (Array.isArray(data.contacts)) {
					setContacts(data.contacts);
				}
			})
			.catch((err) => console.error("Error al cargar contactos:", err));
	}

	function eliminarContacto(id) {
		console.log("Intentando eliminar contacto con ID:", id);
		fetch(`https://playground.4geeks.com/contact/agendas/pedro-sc/contacts/${id}`, {
			method: "DELETE",
		})
			.then((res) => {
				console.log("Respuesta del servidor:", res.status);
				if (res.ok) {
					alert("Contact deleted");
					setContacts(prev => prev.filter(contact => contact.id !== id));
				} else {
					alert(`Error deleting contact: ${res.status}`);
					console.error("Error deleting contact:", res.status);
				}
			})
			.catch((error) => {
				alert("Network error deleting contact");
				console.error("Network error:", error);
			});
	}


	return (
		<div className="container-fluid">

			<div className="row mt-3 mb-4">
				<div className="col-2"></div>
				<div className="col-8 text-center">
					<NavLink to="/newcontact">
						<button className="btn btn-primary">Create new contact</button>
					</NavLink>
				</div>
				<div className="col-2"></div>
			</div>

			<div className="row">
				<div className="col-1"></div>
				<div className="col-10">
					{contacts.length === 0 ? (
						<p className="text-center">No contacts available.</p>
					) : (
						contacts.map((contact) => (
							<Card
								key={contact.id}
								contact={contact}
								onDelete={eliminarContacto}
							/>
						))
					)}
				</div>
				<div className="col-1"></div>
			</div>

		</div>
	);
};
