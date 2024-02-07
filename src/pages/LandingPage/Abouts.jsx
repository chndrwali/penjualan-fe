/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../components/LandingPage/Layout";
import About from "../../components/LandingPage/about/About";
import Testimoni from "../../components/LandingPage/testimoni/testimoni";

function Abouts() {
    return (
        <Layout>
            <About />
            <Testimoni />
        </Layout>
    )
}

export default Abouts;