'use client';

import { useAppSelector } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { BellIcon, SunIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { UserButton } from '@clerk/nextjs';

export default function ProfileBar() {
  // const pageName = useAppSelector((state) => state.page.title);
  // const user = useAppSelector((state) => state.auth.user);
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const router = useRouter();
  const [profileOpened, setProfileOpened] = React.useState(false);
  const toggleProfile = () => {
    setProfileOpened(!profileOpened);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center page-title">
        <button onClick={router.back} className="mx-2 transition-all hover:-translate-x-0.5">
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <p className="text-xl font-semibold">Rest</p>
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
