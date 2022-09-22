import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Formulario from '../componentes/Formulario'

const EditarCliente = () =>{
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

     useEffect(()=>{
        const cargarCliente = ( async()=>{
           const url=`http://localhost:4000/clientes/${id}`
           const  respuesta = await fetch (url)
           const resultado= await respuesta.json()
            setCliente(resultado)
            setCargando(false)
        })
        
        cargarCliente()
    }, [])
    return (
        <>
            <h1 className="font-bold text-4xl text-indigo-500">Editar Cliente</h1>
            <p className="text-xl mt-5 font-semibold text-gray-500">Edite los siguientes campos para registrar un cliente</p>
            <Formulario 
            cliente={cliente} //Estaremos enviando el objeto al mismo componente formulario que se uso para crear
            cargando={cargando}
            />
        </>
    )
}

export default EditarCliente