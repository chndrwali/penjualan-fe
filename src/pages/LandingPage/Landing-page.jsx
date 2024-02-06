/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../components/LandingPage/Layout";
import Hero from "../../components/LandingPage/hero/Hero";
import Available from "../../components/LandingPage/available/available";
import Business from "../../components/LandingPage/business/business";
import Imagine from "../../components/LandingPage/imagine/Imagine";

function LandingPage() {
    return (
        <Layout>
            <Hero />
            <Available />
            <Business />
            <Imagine />
        </Layout>
    )
}

export default LandingPage;