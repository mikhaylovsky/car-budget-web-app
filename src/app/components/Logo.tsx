import Image from 'next/image';
import React from 'react';

export default function Logo({ width, height }: { width: number, height: number }) {
  return (<>
    <Image
      src="/logo.svg"
      alt="Logo"
      className="dark:invert"
      width={width}
      height={height}
      priority
    />
  </>);
}
