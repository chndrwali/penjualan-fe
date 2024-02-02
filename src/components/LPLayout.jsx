import React from 'react';
import Header from './LPheader/Header';
import Footer from './LPfooter/Footer';
import BackToTop from './BackToTop';
import SkipToContent from './SkipToContent';

export default function LPLayout({ children }) {
    return (
        <>
      <SkipToContent />
      <Header />
      <main
        id="content"
        className="z-20 mt-20 md:mx-12 lg:mx-20"
      >
        {children}
      </main>
      <BackToTop />
      <Footer />
    </>
    )
}