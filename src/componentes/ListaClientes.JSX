

const ListaClientes = () => {
    
    return (
            <table className="w-full table-auto mt-5 shadow-md bg-white text-center">
                <thead className='bg-indigo-500 text-white'>
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre de Cliente</td>
                        <td>Nombre de Empresa</td>
                        <td>Empresa</td>
                        <td className="p-2 flex flex-rpw">
                            <button className="bg-yellow-400 p-2 px-5 rounded-md hover:shadow-lg hover:shadow-yellow-300/70">Editar</button>
                            <button className="bg-red-400 p-2 px-5 rounded-md hover:shadow-lg hover:shadow-red-300/70">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    
    )
}
export default ListaClientes