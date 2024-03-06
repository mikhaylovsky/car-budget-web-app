'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { useEffect } from 'react';
import ProfileBar from '@/app/components/ProfileBar';
import { setSidebarState } from '@/store/slices/settings';

export default function Content({ children }: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch();
  const sidebarOpened = useAppSelector((state) => state.settings.sidebarOpened);
  const [sidebarState, setSidebarOpened] = React.useState(sidebarOpened);

  useEffect(() => {
    setSidebarOpened(sidebarOpened);
  }, [sidebarOpened]);

  return (
    <section className="content relative px-5 py-8 sm:ml-80 min-h-screen flex flex-col items-center">
      <div className={`backdrop absolute z-10 top-0 left-0 w-full h-full transition-opacity bg-black ${sidebarState ? 'opacity-30' : 'opacity-0 hidden'}`} onClick={() => dispatch(setSidebarState(false))}></div>
      <div className="container">
        <ProfileBar />

        <div className="">
          {children}
        </div>
      </div>
    </section>
  );
}
