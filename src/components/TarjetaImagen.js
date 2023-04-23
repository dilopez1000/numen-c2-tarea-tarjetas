import React from 'react'
import "./estilos.css";

function TarjetaImagen({url, alt}) {
  return (
    <img className="tarjeta-imagen" src={url} alt={alt} />
  )}


export default TarjetaImagen;