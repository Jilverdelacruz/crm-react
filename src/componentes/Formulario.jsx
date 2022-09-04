import {Formik, Form, Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario =() =>{
    const navigate = useNavigate()
    const nuevoClienteSchemma = Yup.object().shape({
        nombre: Yup.string()
        .min(3,'Ingresar el mínimo de caracteres')
        .max(10,'Ha sobrepasado el máximo de caracteres')
        .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
        .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
        .required('El nombre del email es obligatorio')
        .email('Ingresar un correo válido'),
        telefono: Yup.number().typeError('Ingresar un teléfono válido')
        .integer('Numero telefónico incorrecto')
        .positive('Ingresar nuevamente un teléfono')
    })
    
    const handleSubmit = async (valores) =>{ // MÉTODO POS PARA CREAR CLIENTE
       
       try {
        const url= 'http://localhost:4000/clientes'
        const respuesta = await fetch(url,{
            method:'POST',
            body: JSON.stringify(valores), 
            headers:{ // en la mayoría primero se lee el headers donde puede colocar la autenticación
                'Content-type':'application/json'
            }
        })
        const resultado = await respuesta.json()
       } catch (error) {
        console.log(error)
       }
    }
    return (
        <div className="mt-5 bg-white px-5 py-8 md:w-3/4 mx-auto shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-gray-500 text-center"> Agregar Cliente</h2>
            <Formik
            // Para obtener los valores se usa initialValues
            initialValues={{
                nombre:'',
                empresa:'',
                email:'',
                telefono:'',
                notas:''

            }}
            // leyendo los valores
            onSubmit={async (valores, {resetForm})=>{ // como es un arrow function se le puede agregar el async
                await handleSubmit(valores) // el await se usa para que primero espere que mande los valores y recien lo resetee
                resetForm()
                navigate('/clientes')
            }}
          
            validationSchema={nuevoClienteSchemma} // para que se aplique la validación
            >
            {({errors, touched}) => (  // el touched es para que se aplique en tiempo real, antes de hacer click en guardar
                <Form>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="nombre">Nombre:</label>
                       <Field className='py-3 px-4 block w-full mt-2
                       border border-gray-300 placeholder:text-gray-300 outline-indigo-500 rounded-md'
                       id='nombre'
                       placeholder='Ingrese el nombre'
                       type='text'
                       name='nombre'
                       />
                       {errors.nombre && touched.nombre ? ( // el touched se usa cuando quiere tu validacion en tiempo real y no esperar el submit
                       <Alerta>
                            {errors.nombre}
                        </Alerta>
                       ) : null}
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="empresa">Empresa:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='empresa'
                       placeholder='Ingrese el nombre de la Empresa'
                       type='text'
                       name='empresa'
                       />
                       {errors.empresa && touched.empresa ? ( // el touched se usa cuando quiere tu validacion en tiempo real y no esperar el submit
                       <Alerta>
                            {errors.empresa}
                        </Alerta>
                       ) : null}
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="email">E-mail:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='email'
                       placeholder='Ingrese su correo'
                       type='email'
                       name='email'
                       />
                       {errors.email && touched.email ? ( // el touched se usa cuando quiere tu validacion en tiempo real y no esperar el submit
                       <Alerta>
                            {errors.email}
                        </Alerta>
                       ) : null}
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="telefono">Teléfono:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='telefono'
                       placeholder='Ingrese el número telefónico'
                       type='tel'
                       name='telefono'
                       />
                       {errors.telefono && touched.telefono ? ( // el touched se usa cuando quiere tu validacion en tiempo real y no esperar el submit
                       <Alerta>
                            {errors.telefono}
                        </Alerta>
                       ) : null}
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="notas">Notas:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='notas'
                       as='textarea'
                       placeholder='Ingresa la nota'
                       type='text'
                       name='notas'
                       />
                    </div>
                    <input className='text-lg font-bold text-white bg-indigo-500 uppercase py-3 px-4 rounded-md w-full hover:shadow-lg hover:shadow-indigo-400'
                    value='Guardar'
                    type='submit'
                    
                    />
                    
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario