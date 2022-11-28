import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) =>{
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts();
    }

    function filtro(){
        const mujer = products.filter(product => product.categoria.includes("Mujer"))
        const hombre = products.filter(product => product.categoria.includes("Hombre"))
        const nino = products.filter(product => product.categoria.includes("Nino"))

        return(
            <div>
                <div className='d-grip gap-2'>
                    <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Crear</Link>
                </div>
                <div>
                    <h3>Objetos para mujeres</h3>
                    <div className='container-card'>
                        { mujer.map((m) => (
                            <div key={m.id}>
                                <div className="card">
                                    <img src={m.imagen} height='100' width='100'/>
                                    <div>
                                        <h2>{m.nombre}</h2>
                                        <h5>Precio: ${m.precio}</h5>
                                        <h5>Categoria: {m.categoria}</h5>
                                    </div>
                                    <div>
                                        <Link to={`/edit/${m.id}`} className='btn btn-warning'>Editar</Link>
                                        <button onClick={() => deleteProduct(m.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
                <div>
                    <h3>Objetos para hombres</h3>
                    <div className='container-card'>
                        { hombre.map((h) => (
                            <div key={h.id}>
                                <div className="card">
                                    <img src={h.imagen} height='100' width='100'/>
                                    <div>
                                        <h2>{h.nombre}</h2>
                                        <h5>Precio: ${h.precio}</h5>
                                        <h5>Categoria: {h.categoria}</h5>
                                    </div>
                                    <div>
                                        <Link to={`/edit/${h.id}`} className='btn btn-warning'>Editar</Link>
                                        <button onClick={() => deleteProduct(h.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
                <div>
                    <h3>Objetos para niños</h3>
                    <div className='container-card'>
                        { nino.map((n) => (
                            <div key={n.id}>
                                <div className="card">
                                    <img src={n.imagen} height='100' width='100'/>
                                    <div>
                                        <h2>{n.nombre}</h2>
                                        <h5>Precio: ${n.precio}</h5>
                                        <h5>Categoria: {n.categoria}</h5>
                                    </div>
                                    <div>
                                        <Link to={`/edit/${n.id}`} className='btn btn-warning'>Editar</Link>
                                        <button onClick={() => deleteProduct(n.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        )
    }
    return filtro();
}

export default ShowProducts