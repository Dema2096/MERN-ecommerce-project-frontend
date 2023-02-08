import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById, updateProduct } from '../../actions/productActions';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import Success from "../../components/Success"



function AdminEditProduct() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const productState = useSelector(state => state.getProductByIdReducer)
    const { loading, product, error } = productState

    const updateProductState = useSelector((state)=>state.updateProductReducer)
    const {success, updateerror, updateloading} = updateProductState

    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [countInStock, setCounInStock] = useState()
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        if (product) {

            if (product._id == id) {
                setName(product.name)
                setPrice(product.price)
                setDescription(product.description)
                setImage(product.image)
                setCategory(product.category)
                setCounInStock(product.countInStock)
            } else {
                dispatch(getProductById(id))
            }

        } else {
            dispatch(getProductById(id))
        }
    }, [dispatch, product])

    function editproduct(e) {
        e.preventDefault()

        const updatedProduct = {
            name: name,
            price: price,
            description: description,
            countInStock: countInStock,
            category: category,
            image: image
        }

        dispatch(updateProduct(id, updatedProduct))

    }



    return (
        <div className='row justify-content-center pb-3'>
            <div className='col-md-8 card pb-3'>
                <h1 className='text-center fs-1 text-info mt-3 mb-5'>Editar producto</h1>
                {loading && (<Loader />)}
                {updateloading && (<Loader/>)}
                {updateerror && (<Error error="Algo salio mal, intente de nuevo mas tarde"/>)}
                {error && (<Error error="Algo salio mal, intente de nuevo mas tarde" />)}
                {success && (<Success success="Producto actualizado con exito"/>)}
                {product && (<div>
                    <hr />
                    <form onSubmit={editproduct}>
                        <label className='p-3 fs-3'>Nombre:</label>
                        <input type="text"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='nombre...'
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        <label className='p-3 fs-3'>Precio:</label>
                        <input type="number"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='precio...'
                            required
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }} />
                        <label className='p-3 fs-3'>Descripcion:</label>
                        <input type="text"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='descripcion...'
                            required
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }} />
                        <label className='p-3 fs-3'>URL imagen:</label>
                        <input type="text"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='url imagen...'
                            required
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value)
                            }} />
                        <label className='p-3 fs-3'>Categoria:</label>
                        <input type="text"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='categoria...'
                            required
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} />
                        <label className='p-3 fs-4'>Cantida en stock:</label>
                        <input type="number"
                            className='form-control mb-2 mr-sm-2'
                            placeholder='stock...'
                            required
                            value={countInStock}
                            onChange={(e) => {
                                setCounInStock(e.target.value)
                            }} />
                        <hr />
                        <button
                            className='btn btn-dark mt-3 fs-4'
                            type='submit'>
                            Editar Producto
                        </button>
                    </form>
                </div>)}
            </div>
        </div>
    )
}

export default AdminEditProduct