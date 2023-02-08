import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loader from '../components/Loader'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const loginreducer = useSelector(state => state.loginReducer)
    const { loading, error } = loginreducer

    const login = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        dispatch(loginUser(user))
    }

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/"
        }
    }, [])


    return (
        <div className='ms-2 me-2'>
            {error && (<Error error="No se encontro una cuenta con esos datos" />)}
            {loading && (<Loader />)}
            <div className='row justify-content-center mt-3 p-3'>
                <div className='col-md-4 p-3 card'>
                    <div className="div">
                        <h1 className='fs-1'>Login</h1>

                        <form onSubmit={login}>
                            <label className='p-3 fs-3'>Email:</label>
                            <input type="email " placeholder='Email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                            <label className='p-3 fs-3'>Contraseña:</label>
                            <input type="password" placeholder='Contraseña' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                            <button type='submit' className='btn btn-dark mt-4 fs-4'>LOGIN</button>
                            <hr />
                            <a href="/registration">Sin usuario? Registrarte</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login