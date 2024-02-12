import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { footer } from '../data/landingpageData';

function Footer() {
  return (
    <footer className="bg-black ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="/" className="flex items-center">
                <img className="w-auto h-16 mr-1" src="/logo/android-chrome-512x512.png" alt="" />
                <span className="text-xl font-mono font-semibold whitespace-nowrap text-brown-400">{footer.brand}</span>
              </a>

              <p className="max-w-sm mt-2 text-gray-50">{footer.SEO}</p>

              <div className="flex mt-6 -mx-2">
                <a href={footer.viewOnWhatsapp.url} 
                target="_blank" 
                rel="noreferrer" 
                className="mx-2 text-gray-50 hover:text-blue-600 hover:underline" 
                title={footer.viewOnWhatsapp.title} 
                aria-label={footer.viewOnWhatsapp.title}>
                  <FaWhatsapp />
                </a>

                <a
                href={footer.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-gray-50 hover:text-blue-600 hover:underline"
                title={footer.facebook.title}
               aria-label={footer.facebook.title}
                >
              <FaFacebook />
                </a>
                <a
            href={footer.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-gray-50 hover:text-blue-600 hover:underline"
            title={footer.linkedin.title}
            aria-label={footer.linkedin.title}
          >
            <FaLinkedin />
          </a>
          <a
            href={footer.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-gray-50 hover:text-blue-600 hover:underline"
            title={footer.instagram.title}
            aria-label={footer.instagram.title}
          >
            <FaInstagram />
          </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-50 uppercase ">{footer.about.title}</h3>
                <a href="/about" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.about.company}
                </a>
                <a href="/about" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400 ">
                  {footer.about.career}
                </a>
                
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">{footer.woodtype.title}</h3>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.woodtype.wood}
                </a>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.woodtype.wood1}
                </a>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.woodtype.wood2}
                </a>
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">{footer.product.title}</h3>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.product.kat}
                </a>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.product.kat1}
                </a>
                <a href="/daftar" className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">
                  {footer.product.kat2}
                </a>
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">{footer.contact.title}</h3>
                <span className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">{footer.contact.no}</span>
                <span className="block mt-2 text-sm text-gray-50 hover:underline hover:text-brown-400">{footer.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-50">&copy; {footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
