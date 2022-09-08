import { useParams } from "react-router"
import { useEffect, useState } from "react"

const VerCliente =() =>{
    const {id} = useParams() // estmos destructurando para obtener solo el id
    const [cliente, setCliente] = useState({})
    const {nombre, empresa, telefono, email} = cliente
    useEffect(()=>{
    const cargarCliente = async()=>{
        try {
            const url = `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCliente(resultado)
        } catch (error) {
            
        }
    }
    cargarCliente()

    }, [])
    return(

        <div className="bg-white w-1/2 overflow-hidden rounded-md mx-auto shadow-xl mt-10">
            <img src="bg"/>
            <div className="p-3">
                <p ><span className="font-bold text-xl">Cliente: </span>{nombre}</p>
                <p><span className="font-bold text-xl">Empresa: </span>{empresa}</p>
                
            </div>
            <div className="bg-indigo-400 p-3">
                <p><span className="font-bold text-md">Telefono: </span>{telefono}</p>
                <p><span className="font-bold text-md">Email: </span>{email}</p>
            </div>
        </div>
    )
}
export default VerCliente
