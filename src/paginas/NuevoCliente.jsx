import Formulario from '../componentes/Formulario'

const NuevoCliente = () =>{

    return (
        <>
            <h1 className="font-bold text-4xl text-indigo-500">Nuevo Cliente</h1>
            <p className="text-xl mt-5 font-semibold text-gray-500">Completa los siguientes campos para registrar un cliente</p>
            <Formulario />
        </>
    )
}

export default NuevoCliente