'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { defaultFont } from '@/app/utils';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartTheme = 'dark' | 'light' | undefined;

type ChartProps = {
  chart: {
    legend: string;
    values: {
      [key in string]: number
    };
  };
};

export default function LineChart({ chart }: ChartProps) {
  const { resolvedTheme } = useTheme();

  const [options, setOptions] = React.useState<ApexOptions>({
    chart: {
      fontFamily: defaultFont.style.fontFamily,
      background: 'transparent',
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
      palette: 'palette1',
    },
    xaxis: {
      categories: Object.keys(chart.values),
    }
  });

  const [series, _setSeries] = React.useState<ApexAxisChartSeries>([{
    name: chart.legend,
    data: Object.values(chart.values),
  }]);

  useEffect((): void => {
    setOptions((state: ApexOptions) => {
      return {
        ...state,
        theme: {
          ...state.theme,
          mode: resolvedTheme as ChartTheme,
        }
      };
    });
  }, [resolvedTheme]);

  return (
    <ApexChart type='line' options={options} series={series} height={400} width='100%' />
  );
}
