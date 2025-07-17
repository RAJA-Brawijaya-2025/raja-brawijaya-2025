import { Head, Link, usePage } from '@inertiajs/react';

import { sidebarMenus } from '../configs/sidebar-menus';

const Sidebar = () => {
  const currentPath = usePage().url;
  const menus = sidebarMenus;
  const title =
    menus.find((menu) => currentPath.includes(menu.slug))?.name || 'Dashboard';
  return (
    <aside className="w-full max-w-80 text-gr-02 min-h-screen p-4">
      <Head title={title} />
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
  );
};

export default Sidebar;
