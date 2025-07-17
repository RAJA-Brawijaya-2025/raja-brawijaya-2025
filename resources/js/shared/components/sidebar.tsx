import { Link } from '@inertiajs/react';

import { sidebarMenus } from '../configs/sidebar-menus';

const Sidebar = () => {
  const menus = sidebarMenus;
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="text-2xl font-bold mb-10">Dashboard</div>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.slug} className="mb-4">
              <Link
                href={`/dashboard/${menu.slug}`}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
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
