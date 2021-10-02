import React from 'react'
import Tabla from 'components/ventas/Tabla'
import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';


const datosSimulados = [
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },
    {
        "id":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"150550"
    },

];

const VentasIndex = () => {
    return (
        <div>
            <div className='contenedor-padre'>
                <section className='contenedor-tabla'>
                    <div className='search-sticky'>                    
                        <BarraBusqueda/>
                    </div>
                    <Tabla datos={datosSimulados}></Tabla>
                </section>
                <section className='contenedor-formulario'>
                    <Formulario/>
                </section>
            </div> 
        </div>
    )
}

export default VentasIndex
