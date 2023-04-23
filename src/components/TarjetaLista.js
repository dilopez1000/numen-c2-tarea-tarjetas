import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import data from '../data/data.json';
import "./estilos.css";

function TarjetaLista() {
  
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    setTarjetas(data.tarjetas);
  }, []);

  return (
    <div className="tarjeta-lista">
      {
        tarjetas.map((tarjeta, index) => (
          <Tarjeta tarjeta={tarjeta} key={index} />
        ))
      }
    </div>
  );
}

export default TarjetaLista