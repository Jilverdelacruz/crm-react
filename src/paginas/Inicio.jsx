
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
            <table className="w-full table-auto mt-5 shadow-md bg-white rounded-md overflow-hidden">
                <thead className='bg-indigo-500 text-white'>
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {clientes.map((cliente)=> 
                        <ListaClientes 
                        key={cliente.id}
                        cliente={cliente}
                        />
                        )}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default Inicio