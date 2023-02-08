import React from 'react'
import { Link, Outlet } from "react-router-dom"


function AdminHome() {
    return (
        <div className='admin-div'>
            <div className='row justify-content-center mt-5 ms-2'>
                <div className='col-md-10'>
                    <ul className='admin p-2'>
                        <li ><Link className='linkcard' to="/admin/userslist">Listado de usuarios</Link></li>
                        <li><Link className='linkcard' to="/admin/productslist">Listado de productos</Link></li>
                        <li><Link className='linkcard' to="/admin/addnewproduct">Añadir producto</Link></li>
                        <li><Link className='linkcard' to="/admin/orderslist">Listado de ordenes </Link></li>
                    </ul>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AdminHome