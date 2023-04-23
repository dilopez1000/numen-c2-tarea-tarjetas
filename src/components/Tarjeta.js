import React from "react";
import TarjetaImagen from "./TarjetaImagen";
import TarjetaTitulo from "./TarjetaTitulo";
import TarjetaDescripcion from "./TarjetaDescripcion";
import "./estilos.css";

function Tarjeta({ tarjeta, index }) {
  return (
    <div className="tarjeta" key={index}>
      <TarjetaImagen url={tarjeta.imagen} alt={tarjeta.titulo} />
      <TarjetaTitulo titulo={tarjeta.titulo} />
      <TarjetaDescripcion descripcion={tarjeta.descripcion} />
    </div>
  );
}

export default Tarjeta;