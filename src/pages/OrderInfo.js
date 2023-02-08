import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrderById } from '../actions/orderActions'
import Error from '../components/Error'
import Loader from '../components/Loader'

function OrderInfo() {
  let params = useParams();
  const orderid = params.orderid
  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getOrderByIdReducer)

  const { order, loading, error } = orderstate

  useEffect(() => {
    dispatch(getOrderById(orderid))
  }, [dispatch])


  return (
    <div className='pantalla ms-2 me-2'>
      {error && (<Error error="Halgo salio mal, intente mas tarde" />)}
      {loading && (<Loader />)}
      {order && (<div className=''>
        <div className='row justify-content-center'>
        <div className='col-md-5 card align-items-left mt-4'>
          <h1 className='text-center fs-2 mt-2 text-info'>Items de su orden:</h1>
          <hr/>
          {order.orderItems.map(item=>{
            return <div className='mt-3 text-white'>
              <h1 className='text-info' >{item.name}</h1>
              <h1 >Precio por unidad: <b className='text-success'> {item.price} ARS </b></h1>
              <h1 >Cantidad de Items: <b className='text-warning'>{item.quantity}</b></h1>
              <h1 >Precio total: <b className='text-success'> {item.price*item.quantity} ARS </b> </h1>
              <hr/>
            </div>
            
          })}
        </div >
        <div className='col-md-5 mt-4 ms-2 text-white card'>
          <h1 className='text-center fs-2 mt-2 text-info'>Detalles de la orden:</h1>
          <hr/>
          <h1 className='text-end me-2'>Id de la orden: <b className='text-info'> {order._id} </b></h1>
          <h1 className='text-end me-2'>Total: <b className='text-success'>{order.orderAmount}  ARS </b>  </h1>
          <h1 className='text-end me-2'>Fecha de la realizacion de la orden: <b className='text-warning'> {order.createdAt.substring(0,10)} </b></h1>
          <h1 className='text-end me-2'>Id de la transaccion: <b className='text-info'> {order.transactionId} </b></h1>
          {order.isDelivered ? (<h1 className='text-end text-success me-2'>Orden entregada</h1>):(<h1 className='text-end text-info me-2'>Orden en proceso </h1>)}
          <hr/>
          <div className=''>
            <h1 className='text-center fs-2 mt-3 text-info'>Detalles de la entrega :</h1>
            <hr/>
            <h1 className='text-end me-2'>Direccion: <b className='text-info'>{order.shippingAdress.address.toUpperCase()} </b></h1>
            <h1 className='text-end me-2'>Ciudad: <b className='text-info'>{order.shippingAdress.city}</b> </h1>
            <h1 className='text-end me-2'>Codigo postal:<b className='text-warning'> {order.shippingAdress.postalCode} </b></h1>
          </div>
        </div>
        </div>
      </div>)}
      <hr/>
      <div className='row mt-3 ms-3'>
        <div className='col-md-10 text-start'>
          <h1 className='text-warning'>Condiciones para reemplazar un producto:</h1>
          <ul>
            <li>No se puede realizar un reemplazo gratis con un producto que ha sido devuelto y reemplazado previamente.</li>
            <li>Si tu item no aplica para un reemplazo gratis, sin importar el motivo, puedes devolverlo para una devolucion de dinero.</li>
            <li>Si a tu item le faltan partes o accesorios, debes contactar al fabricante para asistencia. La informacion del fabricante se puede encontrar en el paquete del producto o en la documentacion del item.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OrderInfo