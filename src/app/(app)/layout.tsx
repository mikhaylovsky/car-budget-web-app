import type { Metadata } from 'next';
import Sidebar from '@/app/components/Sidebar';
import ProfileBar from '@/app/components/ProfileBar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Budget web app',
};

export default function AppLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-row">
      <aside className="w-[300px] bg-gradient-to-b from-sky-500 to-indigo-500 p-5">
        <Sidebar/>
      </aside>
      <section className="content container px-5 py-8">
        <ProfileBar/>

        <div className="">
          {children}
        </div>
      </section>
    </main>
  );
}
