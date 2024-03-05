'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import routes, { Route } from '@/router';

export default function Sidebar() {
  const currentPath: string = usePathname();

  return (
    <section className="sidebar h-full px-2 py-8 bg-white dark:bg-gray-800 rounded-xl">
      <div className="flex items-center justify-center p-6 ">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
      <nav className="flex flex-col mt-12">
        <ul>
        {
          routes
          .map((route: Route, index: number) => {
            const current: string = route.href === currentPath ? 'current' : '';

            return (
              <li className={`group block w-full mb-3 ${current}`} key={index}>
                <Link href={route.href} className="flex items-center justify-start py-4 px-4 font-medium hover:shadow-md rounded-xl transition-all group-[.current]:shadow-lg dark:group-[.current]:bg-gray-700 dark:hover:bg-gray-700">
                  {<route.icon className="h-7 w-7 text-gray-400 group-[.current]:text-blue-500" />}
                  <span className="text-sm text-gray-400 group-[.current]:text-gray-900 dark:group-[.current]:text-white ml-3 ">{route.title}</span>
                </Link>
              </li>
            );
          })
        }
        </ul>
      </nav>
    </section>
  );
}
