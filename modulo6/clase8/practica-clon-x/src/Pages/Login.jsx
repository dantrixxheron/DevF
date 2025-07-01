import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Login.css";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (user.trim() === "" || passwd.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (passwd.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    const newUser = {
      id: Date.now(),
      username: user,
      password: passwd,
    };
    e.preventDefault();
    onLogin(newUser);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="log-cont">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
