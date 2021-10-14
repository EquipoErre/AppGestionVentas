import React from 'react'
import Tabla from 'components/ventas/Tabla'
// import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';
import {Link} from "react-router-dom";




const VentasIndex = () => {
    return (
        <div>
            <div className='contenedor-padre'>
                <section className='contenedor-formulario'>
                    <Formulario />
                </section>                
            </div>
        </div>
    )
}

export default VentasIndex
