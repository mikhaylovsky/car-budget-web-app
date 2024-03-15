'use client';

import { useAppDispatch } from '@/store/store';
import { setPageTitle } from '@/store/slices/settings';
import { useEffect } from 'react';
import LineChart from '@/app/components/charts/LineChart';
import Card from '@/app/components/Card';

export default function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Dashboard'));
  }, [dispatch]);

  const chart = {
    legend: 'Пробег',
    values: {
      '01/2024': 20000,
      '02/2024': 22000,
      '03/2024': 25000,
      '04/2024': 27000,
      '05/2024': 28000,
      '06/2024': 32000,
    }
  };

  return (
    <section className='dashboard mt-20'>
      <div className="grid grid-rows-3 grid-cols-2 grid-flow-col gap-4">
        <div className="col-span-2">
          <Card title='Lineup'>
            <LineChart chart={chart} />
          </Card>
        </div>

        <div className="">
          <Card>2</Card>
        </div>
        <div className="">
          <Card>3</Card>
        </div>
        <div className="row-span-2">
          <Card>4</Card>
        </div>
      </div>
    </section>
  );
}
