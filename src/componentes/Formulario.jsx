import {Formik, Form, Field} from 'formik'
const Formulario =() =>{

    return (
        <div className="mt-5 bg-white px-5 py-8 md:w-3/4 mx-auto shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-gray-500 text-center"> Agregar Cliente</h2>
            <Formik>
                <Form>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="nombre">Nombre:</label>
                       <Field className='py-3 px-4 block w-full mt-2
                       border border-gray-300 placeholder:text-gray-300 outline-indigo-500 rounded-md'
                       id='nombre'
                       placeholder='Ingrese el nombre'
                       type='text'
                       
                       />
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="empresa">Empresa:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='empresa'
                       placeholder='Ingrese el nombre de la Empresa'
                       type='text'
                       />
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="email">E-mail:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='email'
                       placeholder='Ingrese su correo'
                       type='email'
                       />
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="telefono">Teléfono:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='telefono'
                       placeholder='Ingrese el número telefónico'
                       type='tel'
                       />
                    </div>
                    <div className='my-4'>
                        <label className='text-gray-400 text-lg' htmlFor="notas">Notas:</label>
                       <Field className='py-3 px-4 block w-full mt-2 placeholder:text-gray-300 border border-gray-300 outline-indigo-500 rounded-md'
                       id='notas'
                       placeholder='Ingresa la nota'
                       type='text'
                       />
                    </div>
                    <input className='text-lg font-bold text-white bg-indigo-500 uppercase py-3 px-4 rounded-md w-full hover:shadow-lg hover:shadow-indigo-400'
                    value='Guardar'
                    type='button'
                    
                    />
                    
                </Form>
            </Formik>
        </div>
    )
}

export default Formulario