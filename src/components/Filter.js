import React from 'react'
import {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import { filterProducts } from '../actions/productActions'

function Filter() {
    const [searchKey, setSearchKey] = useState("")
    const [sort, setSort] = useState("todos")
    const [category, setCategory] = useState("todos")
    const dispatch = useDispatch()



    return (
        <div className='p-3 card shadow'>
            <div className='row justify-content-center gap-3'>
                <div className='col-md-3'>
                    <input value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} type="text" placeholder='Buscar producto...' className='form-control ' />
                </div>
                <div className='col-md-2'>
                    <select value={sort} onChange={(e)=>{setSort(e.target.value)}} className='form-control'>
                        <option value="todos">Todos</option>
                        <option value="lth">Menor a mayor</option>
                        <option value="htl">Mayor a menor</option>
                    </select>
                </div>
                <div className='col-md-2 '>
                    <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className='form-control'>
                        <option value="todos">Todos</option>
                        <option value="notebooks">Notebooks</option>
                        <option value="perifericos">Perifericos</option>
                        <option value="monitores">Monitores</option>
                        <option value="gabinetes">Gabinetes</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-dark w-100' onClick={()=>{dispatch(filterProducts(searchKey,sort,category))}}>Filtrar</button>
                </div>
            </div>
        </div>
    )
}

export default Filter