import React, { useState, useEffect } from 'react'
import Rating from "react-rating"
import { useDispatch, useSelector } from 'react-redux'
import { addProductReview } from '../actions/productActions'

function Review({ product }) {

    const dispatch = useDispatch()
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState('')
    const sendReview = () => {
        if(localStorage.getItem('currentUser')){
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
            let alreadyReviewed
            for (let i = 0; i < product.reviews.length; i++) {
                if (product.reviews[i].userid == currentUser._id) {
    
                    alreadyReviewed = true
    
                }
            }
            if (alreadyReviewed) {
                alert("Ya dejaste tu opinion sobre este producto")
            } else {
                const review = {
                    rating: rating,
                    comment: comment
                }
                dispatch(addProductReview(review, product._id))
            }
        }else{
            window.location.href='/login'
        }
    }



    return (
        <div className=' justify-content-center text-center gap-3'>
            <h1 className='fs-3'>Deja tu opinion sobre este producto :</h1>

            <Rating className='rating fs-5'
                initialRating={rating}
                emptySymbol="far fa-star fa-1x"
                fullSymbol="fa fa-star fa-1x"
                onChange={(e) => { setRating(e) }}
            />
            <input placeholder='Tu opinion aqui...' type="text" className='form-control mt-2' value={comment} onChange={(e) => { setComment(e.target.value) }} />
            <div className='d-flex justify-content-end me-3 mt-3'>
                <button className='btn btn-dark fs-5' onClick={sendReview} >Dejar tu opinion</button>
            </div>
            <hr/>
            <h1 className='fs-3 mt-3'>Todas las opiniones :</h1>
            {product.reviews && (product.reviews.map(review=>{
                return <div className='text-start my-3'>
                    <Rating className='rating fs-5'
                initialRating={review.rating}
                emptySymbol="far fa-star fa-1x"
                fullSymbol="fa fa-star fa-1x"
                readonly
                />
                <p className='fs-5'>{review.comment}</p>
                <p className='fs-4 text-warning'><b>{review.name}</b></p>
                <hr/>
                </div>
            }))}
        </div>
    )
}

export default Review