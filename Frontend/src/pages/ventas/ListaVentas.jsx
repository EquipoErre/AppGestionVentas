import React from 'react'
import Tabla from 'components/ventas/Tabla'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import { Link } from 'react-router-dom';
import "styles/pages/ventas/listaVentas.css"
import { obtenerVentas } from 'utils/api';
import { useState, useEffect } from 'react';

const datosSimulados = [
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    }

];


const ListaVentas = () => {
    
    const [ventas, setVentas] = useState([]);
    useEffect(() => {
        // setVentas(obtenerVentas)
        obtenerVentas(setVentas)
    }, [])
    
    useEffect(() => {
        console.log(ventas)
        
    }, [ventas])
        
                
        return (
        <>
            <section className='contenedor-tabla'>
                <div className='search search-sticky contenedor-busqueda-button'>
                    <div className='contenedor-barra-busqueda'>
                        <BarraBusqueda />
                    </div>
                    <div className="contenedor-link-registro-ventas">
                        <Link to='/ventas'>
                            <button type="button" class="btn btn-primary button-ventas">REGISTRAR VENTA </button>
                        </Link>
                    </div>
                </div>
                <div className='contenedor-tabla'>
                    <Tabla datos={ventas}></Tabla>
                </div>
            </section>
        </>
    )
}

export default ListaVentas
