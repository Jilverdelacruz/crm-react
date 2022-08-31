import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Formulario =() =>{

    const nuevoClienteSchemma = Yup.object().shape({
        nombre: Yup.string().required('El nombre del cliente es obligatorio'),
    
    })
    
    const handleSubmit =(valores) =>{
        console.log(valores)
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
            onSubmit={(valores)=>{
                handleSubmit(valores)
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
                       {errors.nombre && touched.nombre ? ( // el touched se usa cuando quiere tu validacion en tiempo real y no esperar el asubmit
                        <div className='bg-red-400 mt-2 font-bold py-2 text-center rounded-sm'>
                            {errors.nombre}
                        </div>
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
                       
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="email">E-mail:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='email'
                       placeholder='Ingrese su correo'
                       type='email'
                       name='email'
                       />
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="telefono">Teléfono:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='telefono'
                       placeholder='Ingrese el número telefónico'
                       type='tel'
                       name='telefono'
                       />
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