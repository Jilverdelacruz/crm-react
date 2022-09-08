import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'

function App() {

 
  return (

      <BrowserRouter>
        <Routes>
            <Route path='/clientes' element={<Layout />}>  {/*Cuando tiene una etiqueta de cierre es que agrupo un conjunto de rutas y este se convienrte un master page.*/}
              <Route index element={<Inicio />}/>  {/*Es una ruta individual, donde se mostrará en la misma ruta del master page, para ello será necesario usar el Outlet, en este caso en el componenete Inicio */}
              <Route path='nuevo' element={<NuevoCliente />}/> {/* Es una ruta individual donde la ruta se agregará a la ruta principal y tambien verás el master page*/}
              <Route path='editar/:id' element={<EditarCliente />}/>{/*Para la ruta donde se requiere un id dinámico, :id*/ }
              <Route path=':id' element={<VerCliente />}/>
            </Route>
        </Routes>
      </BrowserRouter>
      

  )
}

export default App
