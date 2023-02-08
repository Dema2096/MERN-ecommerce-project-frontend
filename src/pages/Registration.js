import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { registerNewUser } from '../actions/userActions'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'

function Registration() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const dispatch = useDispatch()
    const registerNewUserReducer = useSelector(state => state.registerNewUserReducer)
    const { loading, error, success } = registerNewUserReducer


    const register = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password === cPassword) {
            dispatch(registerNewUser(user))
        } 
        else {
            alert("Las contraseñas no coinciden")
        }
    }

    useEffect(() => {
        if(localStorage.getItem("currentUser")){
            window.location.href="/"
        }
    }, [])

    return (
        <div className='ms-2 me-2'>
            {loading && (<Loader/>)}
            {error && (<Error error="El email ya se encuentra registrado"/>)}
            {success && (<Success success="Usuario registrado con exito"/>)}
            <div className='row justify-content-center mt-3 p-3'>
                <div className='col-md-4 p-3 card'>
                    <form onSubmit={register}>
                        <div className="">
                            <h1 className='fs-1'>Registrarse</h1>
                            <label className='p-3 fs-3'>Nombre de Usuario:</label>
                            <input type="text" placeholder='Usuario' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} required />
                            <label className='p-3 fs-3'>Email:</label>
                            <input type="email " placeholder='Email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}  required/>
                            <label className='p-3 fs-3'>Contraseña:</label>
                            <input type="password" placeholder='Contraseña' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                            <label className='p-3 fs-3'>Confirmar contraseña:</label>
                            <input type="password" placeholder='Confirmar contraseña' className='form-control' value={cPassword} onChange={(e) => { setCPassword(e.target.value) }} required />
                            <button type='submit' className='btn btn-dark mt-4 fs-4'>REGISTRARSE</button>
                            <hr />
                            <a href="/login">Ya tenes usuario? Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration