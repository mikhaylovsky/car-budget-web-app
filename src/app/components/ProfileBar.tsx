'use client';

import { useAppSelector, useAppDispatch } from '@/store/store';
import { setSidebarState } from '@/store/slices/settings';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { BellIcon, SunIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';

export default function ProfileBar() {
  const [currentPageTitle, setPageTitle] = React.useState();
  const pageTitle = useAppSelector((state) => state.settings.pageTitle);

  const sidebarOpened = useAppSelector((state) => state.settings.sidebarOpened);
  const [sidebarState, setSidebarOpened] = React.useState(sidebarOpened);

  useEffect(() => {
    setPageTitle(pageTitle);
  }, [pageTitle]);

  useEffect(() => {
    setSidebarOpened(sidebarOpened);
  }, [sidebarOpened]);

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center page-title">
        <button onClick={() => dispatch(setSidebarState(!sidebarState))} className="md:hidden mx-2 transition-all hover:-translate-x-0.5">
          <Bars3BottomLeftIcon className="h-4 w-4" />
        </button>
        <p className="text-xl font-semibold">{ currentPageTitle }</p>
      </div>

      <div className="flex items-center">
        <div className="px-2">
          <button className="rounded-full transition-all hover:bg-white hover:shadow-md p-2">
            <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
          </button>
        </div>
        <div className="px-2">
          <button className="rounded-full transition-all hover:bg-white hover:shadow-md p-2">
            <BellIcon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
          </button>
        </div>
        <div className="px-2">
          <UserButton afterSignOutUrl={'http://localhost:3000'} />
        </div>
      </div>
    </div>
  );
}
