import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import Products from '../../components/Products'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../actions/productActions"
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Filter from '../../components/Filter'

function Home() {
    const getallproductsstate = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getallproductsstate
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    return (
        <div >
            <Filter/>
            <div className='row justify-content-center products ms-2 me-2 '>
                {loading ? (
                    <Loader/>
                ) : error ? (
                    <Error error="Hubo un problema al cargar, intente nuevamente"/>
                ) : (
                    products.map(product => {
                        return <div className='col-md-3 m-3 card cart shadow p-3' key={product._id}>
                            <Products product={product} />
                        </div>
                    })
                )}
            </div>
        </div>
    )
}

export default Home