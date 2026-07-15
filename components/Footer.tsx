"use client"
import { usePathname } from 'next/navigation';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/chat") {
    return null;
  }
  return (
    <footer className="w-full bg-secondary text-text border-t-2 border-border py-6">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        <div className="text-sm font-bold tracking-tight text-center sm:text-left">
          © {new Date().getFullYear()} Phome Myint Mo
        </div>

        <div className="flex items-center gap-6 text-sm font-black tracking-wide uppercase">

          <a
            href="https://www.linkedin.com/in/phome-myint-mo-0409011a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-1 transition-colors duration-200 hover:scale-105"
          >
            <FaLinkedin size={18} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-text text-background text-[10px] font-bold px-2 py-1 rounded tracking-normal normal-case whitespace-nowrap pointer-events-none">
              LinkedIn
            </span>
          </a>

          <a
            href="https://www.facebook.com/share/1H4782wuqb/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-1  hover:scale-105"
          >
            <FaFacebook size={18} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-text text-background text-[10px] font-bold px-2 py-1 rounded tracking-normal normal-case whitespace-nowrap pointer-events-none">
              Facebook
            </span>
          </a>

          <a
            href="https://github.com/phomeMyintMo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-1 hover:scale-105"
          >
            <FaGithub size={18} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-text text-background text-[10px] font-bold px-2 py-1 rounded tracking-normal normal-case whitespace-nowrap pointer-events-none">
              GitHub
            </span>
          </a>

          <a
            href="mailto:phomemyintmo64@gmail.com"
            className="group relative py-1 hover:scale-105"
          >
            <MdEmail size={20} />

            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-text text-background text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none">
              phomemyintmo64@gmail.com
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;