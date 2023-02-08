import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import { getAllProducts , deleteProduct } from '../../actions/productActions'
import { Link } from 'react-router-dom'

function AdminProductsList() {

    const getallproductsstate = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getallproductsstate
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <div className=''>
            <h1 className='text-center fs-1 text-info mt-3 mb-5'>Listado de productos</h1>
            <hr />
        <div className='row mt-3 justify-content-center product-table card p-3 table-responsive'>
            
            <table className='table table-striped text-warning table-bordered'>
                <thead>
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Id del producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products && (products.map(product => {
                        return <tr>
                            <td className='text-white'>{product.name}</td>
                            <td className='text-white'>{product.price} ARS</td>
                            <td className='text-white'>{product.countInStock}</td>
                            <td className='text-white'>{product._id}</td>
                            <td className='text-danger'>
                                <i className="fa fa-trash delete me-1" onClick={()=>dispatch(deleteProduct(product._id))} ></i>
                                <Link to={`/admin/editproduct/${product._id}`}><i className="fas fa-edit ms-1"></i></Link>    
                            </td>
                        </tr>
                    }))}
                </tbody>
            </table>
            {error && (<Error error="Algo salio mal, intente mas tarde" />)}
            {loading && (<Loader />)}
        </div>
        </div>
    )
}

export default AdminProductsList

