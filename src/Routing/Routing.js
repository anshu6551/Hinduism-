import React, { Component, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Profilepage from '../Profile/Profilr';
import { check_token } from '../Redux/Slice/Slice';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Components/Home/Home';

// import AboutDes from '../Components/About/AboutDes';
import BlogSection from '../Components/Blog/Blog';
import GallerySection from '../Components/Gallery/Galery';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';
import AddFestival from '../Components/Festivals/AddFestival';
import FestivalList from '../Components/Festivals/FestivalList';

import AboutDes from '../Components/About/AboutDes';
import FestivalDetails from '../Components/Festivals/FestivalDetails';




export default function Routing() {
    const dispatch = useDispatch();
    const publicRouteNames = [
        {
            path: "/registration",
            Component: <Registration />
        },
        {
            path: "/login",
            Component: <Login />
        },
        {
            path: "/",
            Component: <Home />
        },
       
        {
            path: "/about",
            Component: < About/>
        },    
       
        {
            path: '/blog',
            Component: <BlogSection/>
        },
        {
            path: '/gallery',
            Component: <GallerySection/>
        },
        

    ]
    const privateRouteNames = [

        {
            path: "/profilepage",
            Component: <Profilepage />
        },
        {
            path: '/contact',
            Component: <Contact/>
        },
        {
            path: "/festivalList",
            Component: <FestivalList/>
         },
        
        {
            path: '/addfestival',
            Component: <AddFestival/>
            
        },
        {
           path: '/festivalDetails/:id',
           Component: <FestivalDetails/>
        },
        {
            path:'/aboutdes',
            Component: <AboutDes/>
        },
        
    ]
    useEffect(() => {
        dispatch(check_token())
    }, []
    )

    function PrivateRoute({ children }) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        return token !== null && token !== undefined ? (children) : (<Navigate to="/login" />)
    }
    return (

        <Router>
            <Header />
            <Routes>
                {publicRouteNames?.map((route, index) => {
                    return (
                        <Route key={index + 1} exact path={route.path} element={route.Component}>
                        </Route>
                    )
                })}
                {privateRouteNames?.map((route, index) => {
                    return (
                        <Route key={index + 2}
                            path={route.path}
                            element={<PrivateRoute>{route.Component}</PrivateRoute>}
                        >

                        </Route>
                    )
                })}
            </Routes>
            <Footer />
        </Router>

    )
}