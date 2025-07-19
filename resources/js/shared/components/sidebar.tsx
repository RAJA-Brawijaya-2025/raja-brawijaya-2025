import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { sidebarMenus } from '../configs/sidebar-menus';
import { useIsMobile } from '../lib/use-mobile';

const Sidebar = () => {
  const currentPath = usePage().url;
  const isMobile = useIsMobile();
  const menus = sidebarMenus;
  const title =
    menus.find((menu) => currentPath.includes(menu.slug))?.name || 'Dashboard';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head title={title} />
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-gr-05 text-white md:hidden">
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="w-6" />
      </div>
      <AnimatePresence>
        {isSidebarOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar Content */}
            <motion.aside
              className="fixed top-0 left-0 w-3/4 h-full bg-white text-gr-02 p-4 z-50"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col text-center mx-auto font-sora mt-8 mb-12">
                <img
                  src="/assets/comingsoon/mahkota.png"
                  alt="mahkota"
                  className="mx-14"
                />
                <h1
                  className="text-lg md:text-2xl font-bold text-[#107D8F]"
                  style={{
                    textShadow: `
                                        1px 1px 0 #fff,
                                        -1px 1px 0 #fff,
                                        1px -1px 0 #fff,
                                        -1px -1px 0 #fff,
                                        3px 3px 6px rgba(0,0,0,0.4)
                                        `,
                  }}
                >
                  RAJA Brawijaya
                </h1>
                <h2
                  className="text-xl font-bold text-[#13B2BE]"
                  style={{
                    textShadow: `
                                        1px 1px 0 #fff,
                                        -1px 1px 0 #fff,
                                        1px -1px 0 #fff,
                                        -1px -1px 0 #fff,
                                        3px 3px 6px rgba(0,0,0,0.4)
                                        `,
                  }}
                >
                  2025
                </h2>
              </div>
              <nav>
                <ul className=" space-y-2">
                  {menus.map((menu) => (
                    <li key={menu.slug}>
                      <Link
                        href={`/admin/${menu.slug}`}
                        className={`flex grow items-center gap-4 p-4 pl-[25%] font-bold text-center text-[#989898] rounded-lg transition-colors ${currentPath === `/admin/${menu.slug}` ? 'bg-gray-200 text-gr-05' : 'hover:bg-gray-300 hover:text-gr-05'}`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {menu.icon}
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="w-full max-w-80 text-gr-02 min-h-screen p-4 hidden md:block">
        <div className="flex flex-col text-center mx-auto font-sora mt-8 mb-12">
          <img
            src="/assets/comingsoon/mahkota.png"
            alt="mahkota"
            className="mx-14"
          />
          <h1
            className="text-lg md:text-2xl font-bold text-[#107D8F]"
            style={{
              textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
            }}
          >
            RAJA Brawijaya
          </h1>
          <h2
            className="text-xl font-bold text-[#13B2BE]"
            style={{
              textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
            }}
          >
            2025
          </h2>
        </div>
        <nav>
          <ul className=" space-y-2">
            {menus.map((menu) => (
              <li key={menu.slug}>
                <Link
                  href={`/admin/${menu.slug}`}
                  className={`flex grow items-center gap-4 p-4 pl-[25%] font-bold text-center text-[#989898] rounded-lg transition-colors ${currentPath === `/admin/${menu.slug}` ? 'bg-gray-200 text-gr-05' : 'hover:bg-gray-300 hover:text-gr-05'}`}
                >
                  {menu.icon}
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
