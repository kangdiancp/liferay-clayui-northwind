import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div>
            <h1 className="text-2xl underline">
               Northwind WebApp
            </h1>
            <ul>
                <Link to="counter" className='mx-3'>Counter basic</Link>
                <Link to="counterArrow" className='mx-3'>Counter Arrow</Link>
                <Link to="counterHook" className='mx-3'>Counter Hook</Link>
            </ul>
            <Outlet/>
        </div>
    )
}
