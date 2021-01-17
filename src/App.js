import './style.css';
import './index.css';
import React, {useEffect, useState} from "react";
import Home from './Views/Home.Screen.js';
import Opendata from './Views/openDataSoft.screen.js';
import Leaflet from './Views/Leaflet.Screen.js';
import OpenDataApi from './utils/Medecins.js';

const Router = () => {
  let [medecin, setMedecin] = useState([]);
  let [active, setActive] = useState("");
  let [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    OpenDataApi().then(data => setMedecin(data.records));
  }, []);

  useEffect(() => {
    if (active) {
      localStorage.setItem('coordinates', coordinates);
      localStorage.setItem('recordid', active);
    }
  }, [active, coordinates]);

  if (window.location.pathname === "/") {
    return <Home />
  } else if (window.location.pathname === "/leaflet") {
    return <Leaflet medecin={medecin} active={active} />
  } else if (window.location.pathname === "/opendata") {
    return <Opendata medecin={medecin} setActive={setActive} setCoordinates={setCoordinates} />
  } else {
    return "ERROR 404"
  }
}

export default Router;
