import { AddressLink, SocialLink } from '../configs/footer-links';
import { Button } from './ui/button';
import { useIsMobile } from '../lib/use-mobile';
import { useIsTab } from '../lib/use-tab';
import { Link } from '@inertiajs/react';
import { LeftLink, RightLink } from '../configs/nav-links';

const Footer = () => {
  const isMobile = useIsMobile();
  const isTab = useIsTab();

  if (isMobile || isTab) {
    return (
      <footer className="min-h-[400px] bg-gradient-to-t from-[#0C4C66] to-[#13B2BE] grid place-items-center px-4 py-6">
        <section className="container mx-auto flex flex-col items-center gap-12 w-full max-w-lg my-8">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="text-yl-03 font-raillinc text-xl md:text-3xl text-center leading-tight">
              Sekretariat
              <br />
              RAJA Brawijaya
            </h2>
            <p className="text-white text-xs md:text-base text-center leading-tight">
              Gedung EM-DPM UB Lantai 1, Jln.
              <br />
              Veteran 06C Malang 65145
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="flex items-center gap-2 text-white text-xs md:text-base">
              <span className="scale-[.8] md:scale-90">
                {AddressLink[1].icon}
              </span>
              <span className="text-base">{AddressLink[1].text}</span>
            </div>
            <div className="flex items-center gap-2 text-white text-xs md:text-base">
              <span className="scale-[.8] md:scale-90">
                {AddressLink[2].icon}
              </span>
              <span className="text-base">{AddressLink[2].text}</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center">
            {SocialLink.map((data, i) => (
              <Link
                key={i}
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-200 scale-75 md:scale-90"
                aria-label={'Social Link'}
              >
                {data.icon}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full text-center">
            {[...LeftLink, ...RightLink].map((data) => (
              <Button
                key={data.href}
                variant="link"
                className="rounded-full text-base md:text-lg text-white font-semibold transition-colors duration-200 px-2 py-0 min-h-0 h-auto"
                onClick={() => {
                  window.location.href = data.href;
                }}
              >
                {data.label}
              </Button>
            ))}
          </div>
          <p className="text-white text-md md:text-lg text-center mt-2">
            © 2025. Tim IT RAJA Brawijaya 2025
          </p>
        </section>
      </footer>
    );
  }
  return (
    <footer className="h-[400px] bg-gradient-to-t from-[#0C4C66] to-[#13B2BE] grid place-items-center">
      <section className="flex container mx-auto flex-col gap-12">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-yl-03 font-raillinc text-xl md:text-3xl text-center leading-tight">
            Sekretariat RAJA Brawijaya
          </h2>
          <ul>
            {[...LeftLink, ...RightLink].map((data) => (
              <Button
                key={data.href}
                variant="link"
                className={
                  ' rounded-full text-lg text-white font-semibold transition-colors duration-200'
                }
                onClick={() => {
                  window.location.href = data.href;
                }}
              >
                {data.label}
              </Button>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" space-y-2">
            {AddressLink.map((data) => (
              <li key={data.text} className="flex items-center gap-2">
                <span className="mr-2">{data.icon}</span>
                <p className="text-white font-medium text-lg">{data.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white">© 2025. Tim IT RAJA Brawijaya 2025</p>
          <div className="flex">
            {SocialLink.map((data) => (
              <Link
                key={data.href}
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-200 scale-90"
                aria-label={'Social Link'}
              >
                {data.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
