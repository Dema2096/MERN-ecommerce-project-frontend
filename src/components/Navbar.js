import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from '../actions/userActions'

function Navbar() {
    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand">
                <a className="navbar-brand ms-3" href="/">H4RDTECH</a>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto ">
                        {currentUser ? (<div className="btn-group dropstart  me-2 ">
                            <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentUser.name} <i className="fa-solid fa-user"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/profile">Perfil <i class='far fa-address-card'></i></a></li>
                                <li><a className="dropdown-item" href="/orders"> Compras <i class="fa-solid fa-truck"></i></a></li>
                                <li><li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}} > Logout <i class="fa fa-sign-out" aria-hidden="true"></i></li></li>
                            </ul>
                        </div>) : (<li className="nav-item active me-3">
                            <a className="nav-link" href="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a>
                        </li>)}
                        <li className="nav-item active me-3">
                            <a className="nav-link " href="/cartcheckout">
                                <i className="fa-solid fa-cart-shopping"></i>{cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


