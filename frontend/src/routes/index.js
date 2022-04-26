import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppMenu from "../components/appmenu/app_menu";

import AboutUs from "../pages/about_us";
import ContactUs from '../pages/contact_us';
import Home from '../pages/home';

const RouterComponent = () => {
    return (
        <>
            <AppMenu />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/contact_us" element={<ContactUs />} />
                </Routes>
            </Router>
        </>    
    );
}

export default RouterComponent;