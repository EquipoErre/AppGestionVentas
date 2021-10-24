import TablaDescripcionventa from 'components/ventas/TablaDescripcionventa';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOneSale } from 'utils/api';
import { obtenerVentas } from 'utils/api';


const DescripcionVenta = () => {
    
    const { id } = useParams();
    // const [id, setId] = useState("");
    const [ventas, setVentas] = useState([]);
    const [venta, setVenta] = useState({});
    const [vendedor, setVendedor] = useState({});
    const [productos, setProductos] = useState([]);
    const [ventaFiltrada, setVentaFiltrada] = useState({});

    useEffect(() => {
        const obtenerUnaVenta = async () => {
            await getOneSale(id, setVenta)            
        }
        obtenerUnaVenta();
    }, [])



    // useEffect(() => {
    //     console.log("Ventas →→ ", ventas);
    // }, [ventas])


    useEffect(() => {
        console.log("Venta → →" , venta)
        setVendedor(venta.vendedor)
        setProductos(venta.productos)
    }, [venta])

    

    // useEffect(() => {
    //     console.log("vendedor → ", vendedor);
        
    // }, [vendedor])
    
    // useEffect(() => {
    //     console.log("Productos → ", productos);
    // }, [productos])


    // useEffect(() => {
    //     const traerVentas = async ()=>{
    //         setId(useParams)        
    //         await obtenerVentas(setVentas)
    //     }
    //     traerVentas();
    // }, [])
    

    // useEffect(() => {
        
    //     if(ventas.length > 0){ 
    //             setVentaFiltrada(
    //                 ventas.filter((v) => v._id === id.id)[0]
    //                 )
    //     }
    
    //   }, [ventas]);

    // useEffect(() => {
    //       console.log("Ventas → ", ventas);
    //     }, [ventas]);
        
    // useEffect(() => {
    //         console.log("VentaFiltrada → →", ventaFiltrada);
    //       }, [ventaFiltrada]);

    // useEffect(() => {
    //     console.log("ID → →" , id);
    // }, [id])
        
    // const obtenerVenta = ()=>{
    //     setId(useParams)
    //     return ventas.find((v)=>(id.id.includes(v._id)))
    // }

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
