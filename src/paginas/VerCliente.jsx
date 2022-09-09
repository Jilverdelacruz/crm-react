import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Spinner from "../componentes/Spinner"
import { object } from "yup"

const VerCliente =() =>{
    const {id} = useParams() // estmos destructurando para obtener solo el id
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true) // es para el spinner
    const {nombre, empresa, telefono, email, notas} = cliente
    useEffect(()=>{
   
    const cargarCliente = async()=>{
        try {
            const url = `http://localhost:4000/clientes/${id}` // CONSUMIR PARA UN SOLO CLIENTE
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCliente(resultado)
        } catch (error) {
            
        }
     setTimeout(()=>{ // Una vez que cargue el la data tiene que desaparecer el spiiner
        setCargando(false)
     }, 1000)   
    
    }
    cargarCliente()

    }, [])
    return(
        <>
        {cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? // A partir de Object es como un elseif el Object.keys lo conveiente en un arreglo
        <>
        <h1 className="font-bold text-4xl text-indigo-500">No visualizamos Ningun Cliente</h1>
        </> :
        <div>
            <h1 className="font-bold text-4xl text-indigo-500">Visualizar Cliente: {nombre}</h1>
            <p className="text-xl mt-5 font-semibold text-gray-500">Información del cliente </p>
            <div className="bg-white w-1/3 overflow-hidden rounded-md mx-auto shadow-xl mt-10">
                <img src="bg"/>
                <div className="p-3">
                    <p className="font-bold text-lg text-center uppercase">{nombre}</p>
                    <p className="text-gray-500 text-sm text-center uppercase">{empresa}</p>
                    {notas ? 
                    <p className="text-gray-500 text-sm">{notas}</p> :
                    <p className="text-gray-300 text-sm">El usuario no tiene notas registradas</p>
                    }
                    
                    
                </div>
                <div className="bg-indigo-400 p-3">
                    <p className="text-sm"><span className="font-bold ">Telefono: </span>{telefono}</p>
                    <p className="text-sm"><span className="font-bold ">Email: </span>{email}</p>
                </div>
            </div>
        </div>
        }
        </>
        
        
    )
}
export default VerCliente
