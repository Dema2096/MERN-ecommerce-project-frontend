import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../actions/productActions'
import Success from "../../components/Success"
import Error from "../../components/Error"
import Loader from "../../components/Loader"


function AdminAddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [countInStock, setCounInStock] = useState()
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()

    const addProducState = useSelector(state=>state.addProductReducer)
    const {success, error, loading} = addProducState


    const addproduct = (e) => {
        e.preventDefault();
        const product = {
            name: name,
            price: price,
            countInStock: countInStock,
            image: image,
            description: description,
            category: category,
        }
        dispatch(addProduct(product))
    }



    return (
        <div>
            <div className='row justify-content-center pb-3'>
                <div className='col-md-8 card pb-3'>
                    {success && (<Success success="Producto agregado con exito"/>)}
                    {loading && (<Loader/>)}
                    {error && (<Error error="Algo salio mal, intente nuevamente mas tarde"/>)}
                    <h1 className='text-center fs-1 text-info mt-3'>Añadir producto</h1>
                    <hr/>
                    <form onSubmit={addproduct}>
                        <label className='p-3 fs-3'>Nombre:</label>
                        <input type="text" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='nombre...'
                        required
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}  />
                        <label className='p-3 fs-3'>Precio:</label>
                        <input type="number" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='precio...'
                        required
                        value={price}
                        onChange={(e)=>{
                            setPrice(e.target.value)
                        }}  />
                        <label className='p-3 fs-3'>Descripcion:</label>
                        <input type="text" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='descripcion...'
                        required
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}  />
                        <label className='p-3 fs-3'>URL imagen:</label>
                        <input type="text" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='url imagen...'
                        required
                        value={image}
                        onChange={(e)=>{
                            setImage(e.target.value)
                        }}  />
                        <label className='p-3 fs-3'>Categoria:</label>
                        <input type="text" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='categoria...'
                        required
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}  />
                        <label className='p-3 fs-4'>Cantida en stock:</label>
                        <input type="number" 
                        className='form-control mb-2 mr-sm-2'
                        placeholder='stock...'
                        required
                        value={countInStock}
                        onChange={(e)=>{
                            setCounInStock(e.target.value)
                        }}  />
                        <hr/>
                        <button
                        className='btn btn-dark mt-3 fs-4'
                        type='submit'>
                            Añadir Producto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAddProduct