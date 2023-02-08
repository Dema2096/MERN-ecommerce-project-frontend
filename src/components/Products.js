import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "react-rating"

function Products({ product }) {
    return (
        <div className=''>
                <Link to={`/product/${product._id}`} className="linkcard ">
                    <img src={product.image} alt={product.name} className="img-fluid " />
                    <hr/>
                    <h1>{product.name}</h1>
                    <h1>Rating: <Rating className='rating'
                        initialRating={product.ratings}
                        emptySymbol="far fa-star fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        readonly
                    /> </h1>
                    <h1>Precio: {product.price} ARS</h1>
                </Link>
        </div>
    )
}

export default Products