import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaAmazon, FaShopify, FaEtsy, FaTiktok } from 'react-icons/fa';
import { SiBukalapak, SiShopee } from 'react-icons/si';
import { avail } from '../data/landingpageData';

function Available() {
  const [icons] = useState([
    { Icon: FaAmazon },
    { Icon: SiBukalapak },
    { Icon: SiShopee },
    { Icon: FaShopify },
    { Icon: FaEtsy },
    { Icon: FaTiktok }
  ]);

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
          transition: { duration: 0.8, ease: 'easeOut' }
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
          {avail.title}
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          {icons.map((item, index) => (
            <a key={index} href="#" className="hover:text-brown-700">
              <item.Icon className="w-12 h-12 mx-auto mb-2" />
              <span className="text-sm">{avail.availBody[index].title}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Available;
