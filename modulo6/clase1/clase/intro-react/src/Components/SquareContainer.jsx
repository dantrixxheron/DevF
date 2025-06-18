import React from "react";
import "../styles/SquareContainer.css";

export default function SquareContainer({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}