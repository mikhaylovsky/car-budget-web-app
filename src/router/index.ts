import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, BeakerIcon } from '@heroicons/react/24/solid';
import { ForwardRefExoticComponent } from 'react';

export interface Route {
  href: string;
  name: string;
  title: string;
  icon: ForwardRefExoticComponent<any>;
}

const routes: Route[] = [
  {
    href: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard',
    icon: BeakerIcon,
  },
  {
    href: '/income',
    name: 'income',
    title: 'Income',
    icon: ArrowTrendingUpIcon,
  },
  {
    href: '/outcome',
    name: 'outcome',
    title: 'Outcome',
    icon: ArrowTrendingDownIcon,
  },
];

export const getHrefByName = (name: string): string => {
  const route: Route | undefined = routes.find((route: Route) => route.name === name);

  if (!route) {
    throw Error('Route not found');
  }

  return route.href;
};

export default routes;
