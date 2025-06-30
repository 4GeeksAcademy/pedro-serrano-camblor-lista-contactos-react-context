import React from "react";

const Card = ({ contact, onDelete }) => {
  return (
    <div className="contact-card d-flex align-items-center justify-content-between border p-3 my-2">
      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="rounded-circle me-3"
        />
        <div>
          <h5>{contact.name}</h5>
          <p><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
          <p><i className="fas fa-phone me-2"></i>{contact.phone}</p>
          <p><i className="fas fa-envelope me-2"></i>{contact.email}</p>
        </div>
      </div>

      <div className="d-flex flex-column">
        <button className="btn btn-outline-secondary mb-2">
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="btn btn-outline-danger" onClick={() => onDelete(contact.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
