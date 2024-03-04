'use client';

import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/lib/store";
import {setLoggedIn, setUser} from "@/lib/slices/auth";
import {getHrefByName} from "@/router";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(setLoggedIn(true));
    dispatch(setUser({
      name: 'Arthur Morgan',
      email: 'amorgan@vercel.app',
      avatar: 'https://i.pravatar.cc/100?u=amorgan@vercel.app'
    }));

    router.push(getHrefByName('dashboard'));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" onClick={login}>
        Login
      </button>
    </main>
  );
}
