import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import {useDispatch, useSelector} from "react-redux"
import { placeOrder } from '../actions/orderActions'
import Loader from '../components/Loader'
import Success from '../components/Success'
import Error from '../components/Error'

function CheckoutComponent({amount}) {
    const dispatch = useDispatch()
    const orderState = useSelector(state=>state.placeOrderReducer)
    const {loading, success, error} = orderState

    function tokenHandler(token){
        console.log(token)
        dispatch(placeOrder(token, amount))
    }

    function validate(){
        if(!localStorage.getItem('currentUser')){
            window.location.href='/login'
        }
    }

    return (
        <Error error='Actualmente la opcion de completar el pago no se encuentra disponible por problemas con Stripe, sepa disculpar' />
    )
}

export default CheckoutComponent

/*
<div>
            {loading&&(<Loader/>)}
            {success &&(<Success success='Pago registrado con exito'/>)}
            {error && (<Error error='Algo fallo al procesar el pago' /> )}
            <StripeCheckout
            token={tokenHandler}
            amount={amount*100}
            shippingAddress
            currency='ARS'
            locale='es-419'	
            stripeKey="pk_test_51MCbiMDp3kgXUuHF3AzZbbyg3aX118qX3EQtnkN5nrOQqkIfINtgaTLSC5P9qentRtRPL03oG1M6gNBTbzSYAHre00RtvbFoDh"
            >
                <div className="text-center d-inline">
                    <button className="   btn btn-dark mb-4" onClick={validate}>COMPLETAR COMPRA</button>
                </div>
            </StripeCheckout>
        </div> 
        */

        