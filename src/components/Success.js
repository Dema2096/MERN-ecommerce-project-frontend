import React from 'react'

function Success({success}) {
    return (
        <div className='d-flex justify-content-center mt-3 '>
            <div className="alert alert-success" role="alert" >
                {success}
            </div>
        </div>
    )
}

export default Success