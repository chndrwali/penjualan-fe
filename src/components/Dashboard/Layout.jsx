/* eslint-disable react/prop-types */
import { Fragment } from "react";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

function Layout({ children }) {
    return (
        <Fragment>
        <Header />
        <section className="flex bg-gray-100">
          <Sidebar />
          <div className="w-full md:w-11/12 h-full">
            {children}
          </div>
        </section>
        <Footer />
      </Fragment>
    )
}

export default Layout;