'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { defaultFont } from '@/app/utils';
import { useTheme } from 'next-themes';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartTheme = 'dark' | 'light' | undefined;

export default function LineChart({ chart }) {
  const { resolvedTheme } = useTheme();

  const option: ApexOptions = {
    chart: {
      id: 'apexchart-example',
      fontFamily: defaultFont.style.fontFamily,
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true,
        }
      },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: resolvedTheme as ChartTheme,
      palette: 'palette9',
    },
    xaxis: {
      categories: Object.keys(chart.values),
    }
  };

  const series = [{
    name: chart.legend,
    data: Object.values(chart.values),
  }];

  return (
    <ApexChart type='area' options={option} series={series} height={400} width='100%' />
  );
}
