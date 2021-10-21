import React from 'react'
import Tabla from 'components/ventas/Tabla'
// import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';




const VentasIndex = () => {

      //se simulan los productos
      const productosBack = [
        {
            '_id': '123',
            'descripcion': 'pantalon',
            'valor': 30000,
            'estado': false
        },
        {
            '_id': '1234',
            'descripcion': 'short',
            'valor': 15000,
            'estado': true
        },
        {
            '_id': '12345',
            'descripcion': 'camisa',
            'valor': 25000,
            'estado': true
        },
        {
            '_id': '123456',
            'descripcion': 'Blusa',
            'valor': 27850,
            'estado': true
        }
    ]
    const vendedoresBack = [
        {
            '_id': '1',
            'nombre': 'Carla'
        },
        {
            '_id': '2',
            'nombre': 'Juan'
        },
        {
            '_id': '3',
            'nombre': 'Pedro'
        }
    ]
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        // obtener vendedores
        //getUsuarios(setVendedores);
        // obtener productos
        //getProductos(setProductos);
        setVendedores(vendedoresBack)
        setProductos(productosBack)
    }, [])

    return (
        <div>
            <div className='contenedor-padre'>
                <section className='contenedor-formulario'>
                    <Formulario vendedores={vendedores} productos={productos}/>
                </section>                
            </div>
        </div>
    )
}

export default VentasIndex
