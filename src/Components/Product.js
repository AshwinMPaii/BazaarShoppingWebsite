import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>
                <input type="search" placeholder='serach products'></input>
            </div>
            <nav class="secondary-nav">
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}
export default Products