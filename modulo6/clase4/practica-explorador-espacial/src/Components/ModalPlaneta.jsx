import React, { useState } from "react";
export default function ModalPlaneta({ planeta, onClose, onSave }) {
  const [nombre, setNombre] = useState(planeta.nombre || "");
  const [descripcion, setDescripcion] = useState(planeta.descripcion || "");
  const [imagen, setImagen] = useState(planeta.imagen || "");

  const handleSave = () => {
    onSave({ ...planeta, nombre, descripcion, imagen });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Planeta</h2>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <label>
          Imagen URL:
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </label>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>
            Guardar
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
