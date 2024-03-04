'use client';

import { useAppDispatch } from '@/lib/store';
import { setPageTitle } from '@/lib/slices/page';

export default function Income() {
  const dispatch = useAppDispatch();
  dispatch(setPageTitle('Income'));

  return;
}
