import axios from "axios"


export const getAllProducts = () => dispatch => {

    dispatch({type:"GET_PRODUCTS_REQUEST"})

    axios.get("/api/products/getallproducts").then(res => {
        console.log(res)
        dispatch({type:"GET_PRODUCTS_SUCCESS",payload:res.data})
    }).catch(err => {
        console.log(err)
        dispatch({type:"GET_PRODUCTS_FAILED", payload : err})
    })

}

export const getProductById = (productid) => dispatch => {

    dispatch({type:"GET_PRODUCTS_BY_ID_REQUEST"})

    axios.post("/api/products/getproductbyid",{productid}).then(res => {
        console.log(res)
        dispatch({type:"GET_PRODUCTS_BY_ID_SUCCESS",payload:res.data})
    }).catch(err => {
        console.log(err)
        dispatch({type:"GET_PRODUCTS_BY_ID_FAILED", payload : err})
    })

}

export const filterProducts = (searchKey, sort, category)=>dispatch=>{
    
    let filteredProducts
    
    dispatch({type:"GET_PRODUCTS_REQUEST"})

    axios.get("/api/products/getallproducts").then(res=>{

        filteredProducts = res.data

        if(searchKey){
            filteredProducts = res.data.filter(product => {return product.name.toLowerCase().includes(searchKey)})
        }

        if(sort != "todos"){
            if(sort=="htl"){
                filteredProducts = res.data.sort((a,b)=>{
                    return -a.price + b.price
                })
            }else{
                filteredProducts = res.data.sort((a,b)=>{
                    return a.price - b.price
                })
            }
        }

        if(category != "todos"){
            filteredProducts = res.data.filter(product=>{
                return product.category.toLowerCase().includes(category)
            })
        }

        dispatch({type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts})


    }).catch(err=>{
        dispatch({type:"GET_PRODUCTS_FAILED", payload : err})
    })
}


export const addProductReview = (review, productid)=>(dispatch, getState) => {
    dispatch({type:"ADD_PRODUCT_REVIEW_REQUEST"})
    const currentUser = getState().loginReducer.currentUser

    axios.post("/api/products/addreview", {review, productid, currentUser}).then(res=>{
        console.log(res)
        dispatch({type:"ADD_PRODUCT_REVIEW_SUCCESS"})
        alert('Opinion publicada con exito')
        window.location.reload()
    }).catch(err=>{
        console.log(err)
        dispatch({type:"ADD_PRODUCT_REVIEW_FAILED"})
    })
}


export const deleteProduct = (productid)=> dispatch=>{
    dispatch({type: "DELETE_PRODUCT_REQUEST"})

    axios.post("/api/products/deleteproduct", {productid}).then(res=>{
        dispatch({type: "DELETE_PRODUCT_SUCCESS", payload : res.data})
        alert("Producto eliminado con exito")
        window.location.reload()
    }).catch(err=>{
        dispatch({type: "DELETE_PRODUCT_FAILED", payload : err})
    })

}

export const addProduct =(product)=> dispatch=>{
    dispatch({type:"ADD_PRODUCT_REQUEST"})

    axios.post("/api/products/addproduct", {product}).then(res=>{
        console.log(res)
        dispatch({type:"ADD_PRODUCT_SUCCESS"})
        setTimeout(window.location.reload(), 7000)
    }).catch(err=>{
        dispatch({type:"ADD_PRODUCT_FAILED"})
    })
}

export const updateProduct =(productid, updatedProduct)=> dispatch=>{
    dispatch({type:"UPDATE_PRODUCT_REQUEST"})

    axios.post("/api/products/updateproduct", {productid, updatedProduct}).then(res=>{
        console.log(res)
        dispatch({type:"UPDATE_PRODUCT_SUCCESS"})
        setTimeout(window.location.href="/admin/productslist", 10000)
    }).catch(err=>{
        dispatch({type:"UPDATE_PRODUCT_FAILED"})
    })
}
