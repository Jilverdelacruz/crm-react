import {Outlet, Link, useLocation } from 'react-router-dom'
const Layout = () =>{
    const ruta = useLocation()
    const rutaActual= ruta.pathname
    return(
        <div className='md:flex md:h-screen'>
            <div className='md:w-1/4 bg-slate-700  py-10 px-5'>
                <h1 className='font-bold text-4xl text-center text-indigo-400'> CRM -REACT</h1>
            <nav>
               <Link className={`${rutaActual === '/clientes' && 'bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/70'} mt-4 block text-2xl font-bold text-gray-300 hover:bg-indigo-500 hover:text-white
               hover:rounded-lg
               hover:shadow-lg hover:shadow-indigo-500/70
               px-3
               py-3`}
               to="/clientes">Inicio</Link>
               <Link className={`${rutaActual === '/clientes/nuevo' && 'bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/70'} mt-4 block text-2xl font-bold text-gray-300 hover:bg-indigo-500 hover:text-white
               hover:rounded-lg
               hover:shadow-lg hover:shadow-indigo-500/70
               px-3
               py-3 `}
               to="/clientes/nuevo">Nuevo Cliente</Link>
            </nav>
            </div>
            <div className='md:w-3/4 bg-slate-100 p-7  overflow-scroll'>
            <Outlet />
            </div>
            
        </div>
    )
}

export default Layout