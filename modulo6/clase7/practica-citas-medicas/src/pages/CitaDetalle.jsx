import { useParams, Navigate } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  const idNum = Number(id);

  if (!Number.isInteger(idNum) || isNaN(idNum)) {
    return <Navigate to="/*" replace />;
  }

  return (
    <div className="page-container">
      <h2 className="page-title">Detalles de la Cita</h2>
      <p className="page-description">ID de la cita: {idNum}</p>
    </div>
  );
}

export default CitaDetalle;
