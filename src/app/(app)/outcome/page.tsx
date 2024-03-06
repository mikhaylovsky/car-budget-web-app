'use client';

import { useAppDispatch } from '@/store/store';
import { setPageTitle } from '@/store/slices/settings';
import { useEffect } from 'react';

export default function Outcome() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Outcome'));
  }, [dispatch]);

  return;
}
