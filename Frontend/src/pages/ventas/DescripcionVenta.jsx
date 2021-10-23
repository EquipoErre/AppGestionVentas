import TablaDescripcionventa from 'components/ventas/TablaDescripcionventa';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { obtenerVentas } from 'utils/api';


const DescripcionVenta = () => {
    
    // const { id } = useParams();
    const [id, setId] = useState("");
    const [ventas, setVentas] = useState([]);
    const [ventaFiltrada, setVentaFiltrada] = useState({});

    useEffect(() => {
        setId(useParams)        
        obtenerVentas(setVentas)
    }, [])

    useEffect(() => {
        if(ventas.length > 0){ 
                setVentaFiltrada(
                    ventas.filter((v) => v._id === id.id)[0]
                    )
        }
      }, [ventas]);

    // useEffect(() => {
    //       console.log("Ventas → ", ventas);
    //     }, [ventas]);
        
    useEffect(() => {
            console.log("VentaFiltrada → →", ventaFiltrada);
          }, [ventaFiltrada]);

    useEffect(() => {
        console.log("ID → →" , id);
    }, [id])
        
    // const obtenerVenta = ()=>{
    //     setId(useParams)
    //     return ventas.find((v)=>(id.id.includes(v._id)))
    // }

    return (
        <>
           <div>

            </div>
            
            <div>
                <TablaDescripcionventa venta={ventaFiltrada}/>
            </div>
        </>
    )
}

export default DescripcionVenta
