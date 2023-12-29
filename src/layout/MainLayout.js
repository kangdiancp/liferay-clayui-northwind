import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <h1 className="text-2xl underline">
               Northwind WebApp
            </h1>
            <ul>
                <Link to="category" className='mx-3'>Category</Link>
                <Link to="product" className='mx-3'>Product</Link>
                <Link to="verticalNav" className='mx-3'>Vertical Navigator</Link>
            </ul>
            <Outlet/>
        </div>
    )
}
