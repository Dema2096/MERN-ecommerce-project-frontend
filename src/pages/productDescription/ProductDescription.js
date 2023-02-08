import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductById } from '../../actions/productActions'
import { addToCart } from '../../actions/cartActions'
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Review from '../../components/Review'

function ProductDescription() {
    let { id } = useParams();
    const productid = id
    const dispatch = useDispatch()
    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
    const { loading, product, error } = getproductbyidstate
    const [quantity,setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getProductById(productid))
    }, [])

    function addtocart(){
        dispatch(addToCart(product,quantity))
    }

    return (
        <div className='ms-2'>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Error error="Algo salio mal al cargar la pagina, intente nuevamente"/>
            ) : (
                <div className='row me-0'>
                    <div className='col-md-6'>
                        <div className='card p-2 m-2 shadow'>
                            <h1 className='fs-1 text-info'>{product.name}</h1>
                            <hr />
                            <img src={product.image} alt="" className="" />
                            <hr />
                            <p className='fs-4'>{product.description}</p>
                        </div>
                    </div>
                    <div className='col-md-6 text-start'>
                        <div className='m-3'>
                            <h1 className='fs-3'>Precio: <b className='fs-3 text-success'>{product.price} ARS </b> </h1>
                            <hr />
                            <h1 className='fs-3'>Cantidad:</h1>
                            <select className='fs-5' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map((value, index) => {
                                    return <option value={index + 1} >{index + 1}</option>
                                })}
                            </select>
                            <div className='d-flex justify-content-end me-3 mt-2'>
                            {product.countInStock>0? <button className='btn btn-dark fs-5' onClick={addtocart}>AGREGAR AL CARRITO</button> : <h1 className='text-danger border border-danger w-25 text-center '>SIN STOCK</h1> }
                            </div>
                            <hr/>
                            <Review product={product}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDescription



/*


            */