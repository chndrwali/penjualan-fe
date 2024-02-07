import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
                <span className="text-xl font-semibold whitespace-nowrap text-brown-800">Rukun Perkasa</span>
              </a>

              <p className="max-w-sm mt-2 text-gray-50">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

              <div className="flex mt-6 -mx-2">
                <a href={footer.viewOnGithub.url} 
                target="_blank" 
                rel="noreferrer" 
                className="mx-2 text-gray-50 hover:text-blue-600 hover:underline" 
                title={footer.viewOnGithub.title} 
                aria-label={footer.viewOnGithub.title}>
                  <FaGithub />
                </a>

                <a
                href={footer.twitter.url}
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-gray-50 hover:text-blue-600 hover:underline"
                title={footer.twitter.title}
               aria-label={footer.twitter.title}
                >
              <FaTwitter />
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
                <h3 className="text-gray-50 uppercase ">About</h3>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Company
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  community
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Tec
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Music
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">Products</h3>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Mega cloud
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Aperion UI
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-50 hover:underline">
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="text-gray-50 uppercase ">Contact</h3>
                <span className="block mt-2 text-sm text-gray-50 hover:underline">+1 526 654 8965</span>
                <span className="block mt-2 text-sm text-gray-50 hover:underline">example@email.com</span>
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
