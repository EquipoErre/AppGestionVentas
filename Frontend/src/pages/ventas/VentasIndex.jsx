import React from 'react'
import Tabla from 'components/ventas/Tabla'
// import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsuarios } from 'utils/api';
import { obtenerVentas } from 'utils/api'
import { obtenerProductos } from 'utils/api';





const VentasIndex = () => {

    //se simulan los productos
    const productosBack = [
        {
            '_id': '1',
            'descripcion': 'Pantalon',
            'valor': 30000,
            'estado': false
        },
        {
            '_id': '2',
            'descripcion': 'Short',
            'valor': 15000,
            'estado': "true"
        },
        {
            '_id': '3',
            'descripcion': 'Camisa',
            'valor': 25000,
            'estado': true
        },
        {
            '_id': '4',
            'descripcion': 'Camisa boton',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '5',
            'descripcion': 'Pantaloneta',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '6',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '7',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '8',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '9',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '10',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '11',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': false
        },
        {
            '_id': '12',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        },
        {
            '_id': '13',
            'descripcion': 'Esqueleto',
            'valor': 27850,
            'estado': true
        }
    ]

    const [usuarios, setUsuarios] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [ventas, setVentas] = useState([]);


    useEffect(() => {
        // obtener vendedores
        // obtener productos
        //getProductos(setProductos);
        // setProductos(productosBack);
        getUsuarios(setUsuarios);
        obtenerProductos(setProductos)
        obtenerVentas(setVentas)
    }, [])

    useEffect(() => {
        setVendedores(usuarios.filter((u) => u.rol === "vendedor"))
    }, [usuarios])

    return (
        <div>
            <div className='contenedor-padre'>
                <section className='contenedor-formulario'>
                    <Formulario vendedores={vendedores} productos={productos} ventas={ventas} />
                </section>
            </div>
        </div>
    )
}

export default VentasIndex
