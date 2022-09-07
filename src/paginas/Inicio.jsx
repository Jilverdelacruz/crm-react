
import ListaClientes from "../componentes/ListaClientes"
import {useState,useEffect} from 'react'
const Inicio = () =>{

    const [clientes, setClientes] = useState([])

    useEffect( ()=>{
        const cargarClientes =(async ()=>{
            try {
            const url = 'http://localhost:4000/clientes'  
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setClientes(resultado)
            } catch (error) {
                console.log(error)
            } 
            
        })
        cargarClientes()
    }, [])
    return (
        <div>
             <h1 className="font-bold text-4xl text-indigo-500">Clientes</h1>
            <p className="text-xl mt-5 font-semibold text-gray-500">Administra tus clientes</p>
            < ListaClientes />
            
        </div>
    )
}

export default Inicio