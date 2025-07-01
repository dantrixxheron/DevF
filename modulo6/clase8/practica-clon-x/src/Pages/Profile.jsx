import React from "react";
import { MdLogout } from "react-icons/md";
import "../assets/Styles/Profile.css";
export default function Profile({ user, logout }) {
  return (
    <div className="profile-container">
      <h1>Perfil</h1>
      {user && <p>Nombre de usuario: {user.username}</p>}
      <button onClick={logout} className="btn-icon">
        <MdLogout />
      </button>
    </div>
  );
}
