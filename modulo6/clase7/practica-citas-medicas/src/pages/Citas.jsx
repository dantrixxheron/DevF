export default function Citas() {
  return (
    <div className="page-container">
      <h1 className="page-title">Lista de Citas Médicas</h1>
      <ul className="citas-list">
        <li><a href="/cita/1" className="cita-link">Cita 1</a></li>
        <li><a href="/cita/2" className="cita-link">Cita 2</a></li>
        <li><a href="/cita/3" className="cita-link">Cita 3</a></li>
      </ul>
    </div>
  );
}
