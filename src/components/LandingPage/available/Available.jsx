import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaAmazon, FaShopify, FaEtsy, FaTiktok } from 'react-icons/fa';
import { SiBukalapak, SiShopee } from 'react-icons/si';

function Available() {
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const sectionPosition = document.querySelector('.bg-white').getBoundingClientRect().top;

      if (scrollY + windowHeight > sectionPosition + 100) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' } // Menambahkan efek transisi dan easing
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
          Produk Kami Tersedia Di
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <a href="#" className="hover:text-brown-700">
            <FaAmazon className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">Amazon</span>
          </a>
          <a href="#" className="hover:text-brown-700">
            <SiBukalapak className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">BukaLapak</span>
          </a>
          <a href="#" className="hover:text-brown-700">
            <SiShopee className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">Shopee</span>
          </a>
          <a href="#" className="hover:text-brown-700">
            <FaShopify className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">Shopify</span>
          </a>
          <a href="#" className="hover:text-brown-700">
            <FaEtsy className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">Etsy</span>
          </a>
          <a href="#" className="hover:text-brown-700">
            <FaTiktok className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">TiktokShop</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Available;
