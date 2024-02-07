import {
  FaGithub, FaTwitter, FaInstagram, FaLinkedin,
} from 'react-icons/fa';
import { footer } from '../data/homeData';

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <a href="#" className='flex items-center'>
            <img className="w-auto h-12 mr-1" src="./logo/android-chrome-512x512.png" alt="" />
            <span className="text-xl font-semibold whitespace-nowrap text-brown-400">Rukun Perkasa</span>
        </a>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white md:w-auto">
          &copy;
          {' '}
          {footer.copy}
        </p>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <a
            href={footer.viewOnGithub.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.viewOnGithub.title}
            aria-label={footer.viewOnGithub.title}
          >
            <FaGithub />
          </a>
          <a
            href={footer.twitter.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.twitter.title}
            aria-label={footer.twitter.title}
          >
            <FaTwitter />
          </a>
          <a
            href={footer.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.linkedin.title}
            aria-label={footer.linkedin.title}
          >
            <FaLinkedin />
          </a>
          <a
            href={footer.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.instagram.title}
            aria-label={footer.instagram.title}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;