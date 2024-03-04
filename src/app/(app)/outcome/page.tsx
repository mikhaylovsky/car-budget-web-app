'use client';

import { useAppDispatch } from '@/lib/store';
import { setPageTitle } from '@/lib/slices/page';

export default function Outcome() {
  const dispatch = useAppDispatch();
  dispatch(setPageTitle('Outcome'));

  return;
}
