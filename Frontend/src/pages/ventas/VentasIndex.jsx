import React from 'react'
import Tabla from 'components/ventas/Tabla'
// import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsuarios } from 'utils/api';




const VentasIndex = () => {

      //se simulan los productos
      const productosBack = [
        {
            '_id': '123',
            'descripcion': 'Pantalon',
            'valor': 30000,
            'estado': false
        },
        {
            '_id': '1234',
            'descripcion': 'Short',
            'valor': 15000,
            'estado': true
        },
        {
            '_id': '12345',
            'descripcion': 'Camisa',
            'valor': 25000,
            'estado': true
        },
        {
            '_id': '123456',
            'descripcion': 'Camisa boton',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '1234567',
            'descripcion': 'Pantaloneta',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '12345678',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        }
    ]

    const [usuarios, setUsuarios] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        // obtener vendedores
        getUsuarios(setUsuarios);        
        // obtener productos
        //getProductos(setProductos);
        setProductos(productosBack)
    }, [])
    
    useEffect(() => {
        setVendedores(usuarios.filter((u) => u.rol === "vendedor"))
    }, [usuarios])

    useEffect(() => {
        console.log("vendedores →→→ ",vendedores)

    }, [vendedores])

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
