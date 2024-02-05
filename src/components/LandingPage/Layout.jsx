/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BackToTop from "./BackToTop";
import SkipToContent from "./SkipToContent";

function Layout({ children }) {
    return (
        <>
        <SkipToContent />
        <Header />
        <main 
         id="content"
         className="z-20 mt-20 md:mx-12 lg:mx-20">
            {children}
        </main>
        <BackToTop />
        <Footer />
        </>
    )
}

export default Layout;