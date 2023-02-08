import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersByuserId } from '../actions/orderActions'
import Loader from '../components/Loader'
import { getOrdersByUserIdReducer } from '../reducers/orderReducer'
import Error from '../components/Error'
import { Link } from 'react-router-dom'

function Orders() {
    const orderState = useSelector(state => state.getOrdersByUserIdReducer)
    const { orders, error, loading } = orderState

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            dispatch(getOrdersByuserId())
        } else {
            window.location.href = '/login'
        }
    }, [dispatch])



    return (
        <div className='row mt-3 justify-content-center product-table me-2 ms-2'>
            <h1 className='text-center fs-1 text-info mt-3 mb-3'>Mis Pedidos:</h1>
                <hr />
            <div className='col-md-8 card pb-5 table-responsive pt-3 '>
                <table className='table text-warning table-bordered'>
                    <thead>
                        <tr>
                            <th>
                                ID de la orden
                            </th>
                            <th>
                                Gasto total
                            </th>
                            <th>
                                Fecha
                            </th>
                            <th>
                                ID de la transaccion
                            </th>
                            <th>
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {orders && (orders.map(order => {
                            return <tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                                <td className='text-white'>{order._id}</td>
                                <td className='text-success'>{order.orderAmount} ARS</td>
                                <td className='text-warning'>{order.createdAt.substring(0, 10)}</td>
                                <td className='text-white'>{order.transactionId}</td>
                                <td >{order.isDelivered ? (<li className='text-success'>Orden entregada</li>) : (<li className="text-info">Orden en proceso</li>)}</td>
                            </tr>
                        }))}
                        {error && (<Error error="Algo salio mal, intente de nuevo mas tarde" />)}
                    </tbody>
                </table>
                {loading && (<Loader />)}
            </div>
        </div>
    )
}

export default Orders