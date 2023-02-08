import React from 'react'

function Loader() {
    return (
        <div className='mt-5'>
            <div className="spinner-border text-warning mt-5 " role="status" style={{height:"15vh",width:"15vh"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader