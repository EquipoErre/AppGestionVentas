import React from 'react'
import Formulario from 'components/ventas/Formulario';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsuarios } from 'utils/api';
import { obtenerVentas } from 'utils/api'
import { obtenerProductos } from 'utils/api';





const VentasIndex = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [ventas, setVentas] = useState([]);


    useEffect(() => {
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
