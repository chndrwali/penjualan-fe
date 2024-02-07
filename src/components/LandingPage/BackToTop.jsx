/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-scroll';

function BackToTop() {
  return (
    <Link
      to="content"
      id="backToTop"
      spy
      smooth
      className="fixed min-h-[44px] min-w-[44px] z-50 cursor-pointer justify-center items-center bottom-4 p-4 right-4 h-11 w-11 bg-wood-500 hover:bg-blue-600 rounded-full shadow shadow-brown-200/50 hover:shadow-lg hover:shadow-brown-300/30 hover:opacity-90 transition-all duration-200 ease-in-out"
      title="Tombol Kembali Ke Atas"
    >
      <span className="block h-3 w-3 rotate-45 border-t-2 border-l-2 mt-1" />
    </Link>
  );
}

export default BackToTop;