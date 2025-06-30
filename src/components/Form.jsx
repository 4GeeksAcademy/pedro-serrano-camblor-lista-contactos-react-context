import React, { useState } from "react";

const Form = () => {
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    // Actualiza el campo del contacto al escribir
    function actualizarCampoContacto(evento) {
        setNewContact({
            ...newContact,
            [evento.target.name]: evento.target.value
        });
    }

    // Envía el contacto a la API
    function guardarContactoEnAPI(evento) {
        evento.preventDefault();

        fetch("https://playground.4geeks.com/contact/agendas/pedro-sc/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        })
            .then((response) => {
                if (!response.ok) {
                    console.error("Error al guardar el contacto:", response.status);
                    alert("Error saving contact");
                    return;
                }
                alert("New contact successfully added");
                return response.json();
            })
            .then((data) => {
                if (data) {
                    setNewContact({ name: "", email: "", phone: "", address: "" });
                    console.log("Contacto guardado:", data);
                }
            })
            .catch((error) => console.error("Error:", error));

    }

    return (
        <form onSubmit={guardarContactoEnAPI}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Full name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    value={newContact.name}
                    onChange={actualizarCampoContacto}
                    placeholder="Full name"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    name="email"
                    value={newContact.email}
                    onChange={actualizarCampoContacto}
                    placeholder="Enter email"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">Phone</label>
                <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    name="phone"
                    value={newContact.phone}
                    onChange={actualizarCampoContacto}
                    placeholder="Enter phone number"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    name="address"
                    value={newContact.address}
                    onChange={actualizarCampoContacto}
                    placeholder="Enter address"
                    required
                />
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-success">
                    Save contact
                </button>
            </div>
        </form>
    );
};

export default Form;
