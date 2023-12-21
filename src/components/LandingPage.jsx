import { default as React, useEffect, useState } from 'react';
import Footer from './Footer';
import Info from './Info';
import Loading from './Loading';
import Navbar from './Navbar';
import Signup from './Signup';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const hasVisited = localStorage.getItem('visited');
        if (hasVisited) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                
                localStorage.setItem('visited', 'true');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return (
    <>
    <Navbar/>
    <Signup/>
    <Info/>
    <Footer/>
    </>
)
}

export default LandingPage