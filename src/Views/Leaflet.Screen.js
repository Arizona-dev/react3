import React, {useEffect, useState} from "react";
import Header from '../Components/Header';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Leaflet({medecin, active}) {

  const defaultCoordinates = [48.8587408, 2.3461269];
  const defaultZoom = 13;

  let [zoom, setZoom] = useState(defaultZoom);
  let [selectedMedecin, setSelectedMedecin] = useState(defaultCoordinates);
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('recordid') && localStorage.getItem('coordinates')) {
      setSelectedMedecin(localStorage.getItem('coordinates').split(','));
      setZoom(20);
    } else {
      setZoom(defaultZoom);
      setSelectedMedecin([48.8587408, 2.3461269]);
    }
    localStorage.removeItem('coordinates');
    localStorage.removeItem('recordid');
    setLoaded(true);
  }, []);

  return (
    <>
    { loaded === false
      ? <div>Chargement de la carte</div>
      :<div className="App">
      <Header />
      <div className="description">
        <h1>Trouver un Médecin généraliste à Paris</h1>
      </div>
      <MapContainer center={selectedMedecin} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {medecin.map(med =>
        <Marker position={med.fields.coordonnees} key={med.recordid}>
          { med.recordid === active
            ?<Popup >
              {med.fields.libelle_profession} <br /> {med.fields.nom} <br /> { med.fields.column_10 } <br /> { med.fields.adresse }
            </Popup>
            :<Popup>
              {med.fields.libelle_profession} <br /> {med.fields.nom} <br /> { med.fields.column_10 } <br /> { med.fields.adresse }
            </Popup>
          }
        </Marker>
        )}
      </MapContainer>
      <br></br><br></br>
    </div>
    }
    </>
    
  );
}