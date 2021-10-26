import TablaDescripcionventa from 'components/ventas/TablaDescripcionventa';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOneSale } from 'utils/api';


const DescripcionVenta = () => {
    
    const { id } = useParams();
    const [venta, setVenta] = useState({});
    const [vendedor, setVendedor] = useState({});
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerUnaVenta = async () => {
            await getOneSale(id, setVenta)            
        }
        obtenerUnaVenta();
    }, [])

    useEffect(() => {
        setVendedor(venta.vendedor)
        setProductos(venta.productos)
    }, [venta])

    return (
        <>
           <div>

            </div>
            
            <div>
                {vendedor && productos && <TablaDescripcionventa unaVenta={venta} unVendedor={vendedor} productos={productos}/>}
            </div>
        </>
    )
}

export default DescripcionVenta
