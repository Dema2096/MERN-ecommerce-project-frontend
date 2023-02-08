import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {getAllUsers} from "../../actions/userActions"
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import { deleteUser } from '../../actions/userActions'


function AdminUsersList() {
    const getAllUsersState = useSelector(state => state.getAllUsersReducer)

    const {users, loading, error} = getAllUsersState

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())

    }, [])



    return (
        <div>
            <h1 className='text-center fs-1 text-info mt-3 mb-5'>Listado de usuarios</h1>
            <hr/>
        <div className='row mt-3 justify-content-center product-table card p-3 table-responsive'>
            
            <table className='table table-striped text-warning table-bordered'>
                <thead>
                    <tr>
                        <th>Id de usuario</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users && (users.map(user=>{
                        return <tr>
                            <td className='text-white'>{user._id}</td>
                            <td className='text-white'>{user.name}</td>
                            <td className='text-white'>{user.email}</td>
                            <td className='text-danger'><i className="fa fa-trash delete" onClick={()=>{dispatch(deleteUser(user._id))}} ></i></td>
                        </tr>
                    }))}
                </tbody>
            </table>
            {error && (<Error error="Algo salio mal, intente mas tarde"/>)}
            {loading && (<Loader/>)}
        </div>
        </div>
    )
}

export default AdminUsersList