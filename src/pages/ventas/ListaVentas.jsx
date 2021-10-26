import React from 'react'
import Tabla from 'components/ventas/Tabla'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import { Link } from 'react-router-dom';
import "styles/pages/ventas/listaVentas.css"
import { obtenerVentas } from 'utils/api';
import { useState, useEffect } from 'react';


const ListaVentas = () => {
    
    const [ventas, setVentas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [ventasFiltradas, setVentasFiltradas] = useState(ventas);

    useEffect(() => {
        obtenerVentas(setVentas)
    }, [])
    
    useEffect(() => {
        setVentasFiltradas(
          ventas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, ventas]);
        
                
        return (
        <>
            <section className='contenedor-tabla'>
                <div className='search search-sticky contenedor-busqueda-button'>
                    <div className='contenedor-barra-busqueda'>
                        <BarraBusqueda setBusqueda={setBusqueda} />
                    </div>
                    <div className="contenedor-link-registro-ventas">
                        <Link to='/ventas'>
                            <button type="button" class="btn btn-primary button-ventas">REGISTRAR VENTA </button>
                        </Link>
                    </div>
                </div>
                <div className='contenedor-tabla'>
                    <Tabla ventas={ventasFiltradas}/>
                </div>
            </section>
        </>
    )
}

export default ListaVentas
