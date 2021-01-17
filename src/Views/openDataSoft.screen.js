import Header from '../Components/Header';

export default function OpenData({medecin, setActive, setCoordinates}) {
  function handleClick(id, coordinates) {
    setActive(id);
    setCoordinates(coordinates);
    window.location.href = '/leaflet';
  }
  return (
    <div className="App">
      <Header />
      <div className="description">
        <h1>Trouver un Médecin généraliste à Paris</h1>
      </div>
      <section className="container">
        {medecin.map(medecin =>
        <article onClick={() => handleClick(medecin.recordid, medecin.fields.coordonnees)} className="card" key={medecin.recordid}>
          <h1 className="title">{medecin.fields.nom}</h1>
          <h2 className="type">{medecin.fields.libelle_profession}</h2>
          <a href={`tel:${medecin.fields.column_10}`} className="phone">{medecin.fields.column_10}</a>
          <p className="address">{medecin.fields.adresse}</p>
        </article> )}
      </section>
    </div>
  );
}