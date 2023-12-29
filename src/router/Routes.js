import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'
import MainLayout from '../layout/MainLayout'
import Category from '../pages/master/Category'
import Product from '../pages/master/Product'
import CounterArrow from '../pages/basic/CounterArrow'
import CounterHook from '../pages/basic/CounterHook'
import Counter  from '../pages/basic/Counter';
import VerticalNav from '../pages/basic/VerticalNav'




export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: 'category', element: <Category /> },
                { path: 'product', element: <Product /> },
                { path: 'verticalNav', element: <VerticalNav /> }
            ]
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: 'counter', element: <Counter /> },
                { path: 'counterArrow', element: <CounterArrow /> },
                { path: 'counterHook', element: <CounterHook /> },
               
            ]
        },
        { path: '*', element: <Navigate to='/404' replace /> }
    ])
   
}
