import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState()
    const [imagen, setImg] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre:name, categoria: category, precio: price, imagen: imagen})
        navigate('/')
    }
    
  return (
    <div>
        <center>
            <form onSubmit={store}>
                <table className='bg-info' width='400'>
                    <thead>
                        <td colspan='2' align='center'>
                            <h3>Crear Producto</h3>
                        </td>
                    </thead>
                    <tr>
                        <td align='right'>Nombre:</td>
                        <td>
                            <input 
                                value={name} 
                                onChange={ (e)=> setName(e.target.value)} 
                                type='text' 
                                className='form-control' required/>
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Categoria:</td>
                        <td>
                            <select value={category} onChange={(e)=> setCategory(e.target.value)} className='form-control'>
                                <option value=''>--Seleciona--</option>
                                <option value='Mujer'>Mujer</option>
                                <option value='Hombre'>Hombre</option>
                                <option value='Ninos'>Niños</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Precio: $</td>
                        <td>
                            <input 
                                value={price}
                                onChange={ (e)=> setPrice(e.target.value)}
                                type='number'
                                className='form-control'
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Imagen:</td>
                        <td>
                            <input 
                                value={imagen}
                                onChange={ (e)=> setImg(e.target.value)}
                                type='text'
                                className='form-control'
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2' align='center'>
                            <button type='submit' className='btn btn-success'>Guardar</button>
                        </td>
                    </tr>
                </table>
            </form>
        </center>
    </div>
  )
}

export default CreateProduct