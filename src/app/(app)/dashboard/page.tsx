'use client';

import { useAppDispatch } from '@/lib/store';
import { setPageTitle } from '@/lib/slices/page';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  dispatch(setPageTitle('Dashboard'));

  return;
}
