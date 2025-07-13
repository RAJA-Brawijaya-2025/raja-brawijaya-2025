import { Link } from '@inertiajs/react';
import { LeftLink, RightLink } from '../configs/nav-links';
import { Button } from './ui/button';

const Navbar = () => {
  const currentPath = window.location.pathname;

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
