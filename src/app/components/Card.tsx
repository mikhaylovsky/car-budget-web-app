import React from 'react';

export default function Card({ title, children }: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className='p-4 w-full h-full bg-white rounded-xl shadow-md dark:bg-gray-700'>
      {title &&
        <div className='p-2'>
          <p className='text-l font-semibold'>{title}</p>
        </div>
      }
      {children}
    </div>
  );
}
