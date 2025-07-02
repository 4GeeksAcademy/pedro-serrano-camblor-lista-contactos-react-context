import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function createContact(evento) {

        evento.preventDefault();

        fetch("https://playground.4geeks.com/contact/agendas/pedro-sc/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                address: address,
            })
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
                    // Vacío los campos tras guardar
                    setName("");
                    setEmail("");
                    setPhone("");
                    setAddress("");
                    console.log("Contacto guardado:", data);
                }
            })
            .catch((error) => console.error("Error:", error));
    }

    return (
        <form onSubmit={createContact}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Full name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">Phone</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
