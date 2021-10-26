import React from 'react'
import 'styles/components/ventas/componentsBarraBusqueda.css'

const BarraBusqueda = ({setBusqueda}) => {
    return (
        <>
            <input onChange={(e) => { setBusqueda(e.target.value) }} className='barra search' type="search" placeholder="Buscar..." />            
        </>
    )
}

export default BarraBusqueda
