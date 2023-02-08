import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../actions/userActions'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'

function UserProfile() {
    const dispatch = useDispatch()
    const loginstate = useSelector(state=>state.loginReducer)
    const updateUserState = useSelector((state)=>state.updateUserReducer)
    const currentUser = loginstate.currentUser
    const {loading, success, error} = updateUserState
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    function update(e){

        e.preventDefault()
        if(password==cPassword){
            const updatedUser = {
                name : name,
                email : email,
                password : password,
    
            }
            dispatch(updateUser(currentUser._id, updatedUser))
        }else{alert('Las contraseñas no coinciden')}
    }

    return (
        <div className='ms-2 me-2'>
            {loading && (<Loader/>)}
            {error && (<Error error="Algo salio mal, intente mas tarde" />)}
            {success && (<Success success="Usuario actualizado, re-login para ver los cambios" />)}
            <div className='row justify-content-center mt-3 p-3'>
                <div className='col-md-4 p-3 card'>
                    <form onSubmit={update}>
                        <div className="">
                            <h1 className='fs-1'>Actualizar datos</h1>
                            <label className='p-3 fs-3'>Nombre de Usuario:</label>
                            <input type="text" placeholder='Usuario' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} required />
                            <label className='p-3 fs-3'>Email:</label>
                            <input type="email " placeholder='Email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                            <label className='p-3 fs-3'>Contraseña:</label>
                            <input type="password" placeholder='Contraseña' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                            <label className='p-3 fs-3'>Confirmar contraseña:</label>
                            <input type="password" placeholder='Confirmar contraseña' className='form-control' value={cPassword} onChange={(e) => { setCPassword(e.target.value) }} required />
                            <button type='submit' className='btn btn-dark mt-4 fs-4'>Actualizar datos</button>
                            <hr />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserProfile