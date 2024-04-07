import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export default function AddContact() {
  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    actions.CreateContact(formData);
  }

  return (
    <div className="container">
      <form method="PUT">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          ></input>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="form-control"
            required
          ></input>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="form-control"
            required
          ></input>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            onChange={handleChange}
            value={formData.address}
            name="address"
            className="form-control"
            required
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Save User
        </button>
      </form>
    </div>
  );
}
