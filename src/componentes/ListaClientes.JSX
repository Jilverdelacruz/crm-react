import {useNavigate} from 'react-router-dom'


const ListaClientes = ({cliente}) => {
     const {id, nombre, telefono, email, empresa} = cliente
     const navigate = useNavigate()
   
     
    return (
        <tr>
            <td className="p-3">{nombre}</td>
            <td className="p-3">
            <p ><span className="font-bold">Email:</span>{email}</p>
            <p ><span className="font-bold">Teléfono:</span>{telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3 md:flex md:flex-row md:justify-around ">
            <button className=" bg-green-500 p-2 px-5 rounded-md hover:shadow-lg hover:shadow-green-300/70"
            onClick={()=> navigate(`/clientes/${id}`)}
            >Visualizar</button>
            <button className=" bg-yellow-400  p-2 px-5 rounded-md hover:shadow-lg hover:shadow-yellow-300/70">Editar</button>
            <button className="bg-red-400 p-2 px-5 rounded-md hover:shadow-lg hover:shadow-red-300/70">Eliminar</button>
            </td>
        </tr>
    
    )
}
export default ListaClientes