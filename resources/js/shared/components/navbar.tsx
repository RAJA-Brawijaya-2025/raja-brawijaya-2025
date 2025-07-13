import { LeftLink, RightLink } from '../configs/nav-links';
import { Button } from './ui/button';
import { useIsMobile } from '../lib/use-mobile';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EllipsisVertical, X } from 'lucide-react';

const Navbar = () => {
  const currentPath = window.location.pathname;
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const getLinkStyle = (href: string) => {
    return isActive(href)
      ? 'bg-primary-300 text-white px-8 py-6 rounded-full text-[1.3rem] font-bold'
      : 'hover:text-primary-200 transition-colors text-[1.3rem] font-bold text-primary-300';
  };

  const menuVariants = {
    closed: { y: '-100%', opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  if (isMobile) {
    return (
      <>
        <button
          className={`fixed top-6 right-6 z-[100] rounded-full p-3 flex items-center justify-center ${open ? '' : ' bg-white/40 backdrop-blur-xl'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          style={
            open
              ? undefined
              : {
                  boxShadow:
                    '4px -4px 10px 0px rgba(255, 255, 255, 0.25) inset, -4px 4px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 40px 0px rgba(0, 0, 0, 0.25) inset',
                }
          }
        >
          {open ? <X size={32} /> : <EllipsisVertical size={32} />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-menu"
              initial="closed"
              animate="open"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-50 flex flex-col items-center justify-start pt-10 pb-8 bg-white/40 backdrop-blur-xl h-screen"
            >
              <img
                src="/assets/fragments/logo-nav.svg"
                alt="logo"
                className="w-48 mb-8 mt-2"
              />
              <div className="flex flex-col gap-6 w-full items-center">
                {[...LeftLink, ...RightLink].map((data) => (
                  <Button
                    key={data.href}
                    variant="nav"
                    className={
                      (isActive(data.href)
                        ? 'bg-primary-300 text-white '
                        : 'hover:text-primary-200 text-primary-300 ') +
                      'w-1/3 py-6 rounded-full text-xl font-bold transition-colors duration-200' +
                      (isActive(data.href) ? ' shadow-lg' : '')
                    }
                    onClick={() => {
                      setOpen(false);
                      window.location.href = data.href;
                    }}
                  >
                    {data.label}
                  </Button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav
      className="max-w-7xl h-max fixed left-[50%] translate-x-[-50%] top-10 w-full py-4 mx-8 rounded-full bg-white/40 backdrop-blur-sm z-50 "
      style={{
        boxShadow:
          '4px -4px 10px 0px rgba(255, 255, 255, 0.25) inset, -4px 4px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 40px 0px rgba(0, 0, 0, 0.25) inset',
      }}
    >
      <div className="flex justify-evenly items-center">
        <ul className="flex gap-12 w-full justify-between px-6 items-center">
          {LeftLink.map((data) => (
            <Button
              key={data.href}
              variant="nav"
              className={getLinkStyle(data.href)}
              onClick={() => {
                window.location.href = data.href;
              }}
            >
              {data.label}
            </Button>
          ))}
        </ul>
        <img
          src="/assets/fragments/logo-nav.svg"
          alt="logo"
          className="w-44 mx-8"
        />
        <ul className="flex gap-12 w-full justify-between px-6 items-center">
          {RightLink.map((data) => (
            <Button
              key={data.href}
              variant="nav"
              className={getLinkStyle(data.href)}
              onClick={() => {
                window.location.href = data.href;
              }}
            >
              {data.label}
            </Button>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
