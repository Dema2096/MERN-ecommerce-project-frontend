import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import Success from "../../components/Success"
import {getAllOrders} from "../../actions/orderActions"
import { Link } from 'react-router-dom'

function AdminOrdersList() {
    const getallordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, orders, error } = getallordersstate
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllOrders())
    },[])


    return (
        <div>
            <h1 className='text-center fs-1 text-info mt-3 mb-5'>Listado de ordenes</h1>
            <hr />
        <div className='row mt-3 justify-content-center product-table card p-3 table-responsive'>
            <table className='table table-striped text-warning table-bordered'>
                <thead>
                    <tr>
                        <th>Id de la orden</th>
                        <th>Email</th>
                        <th>Id del usuario</th>
                        <th>Precio total</th>
                        <th>Fecha</th>
                        <th>Id de la transaccion</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && (orders.map(order => {
                        return <tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                            <td className='text-white'>{order._id}</td>
                            <td className='text-white'>{order.email}</td>
                            <td className='text-white'>{order.userId}</td>
                            <td className='text-white'>{order.orderAmount} ARS</td>
                            <td className='text-warning'>{order.createdAt.substring(0, 10)}</td>
                            <td className='text-white'>{order.transactionId}</td>
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

export default AdminOrdersList