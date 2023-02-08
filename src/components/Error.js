import React from 'react'

function Error({error}) {
    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className="alert alert-danger " role="alert" >
                {error}
            </div>
        </div>
    )
}

export default Error