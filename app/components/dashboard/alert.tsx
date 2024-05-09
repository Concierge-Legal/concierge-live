'use client';
import React, { useState } from 'react';

export const AlertComponent = ({ message }: {message: string}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded" role="alert">
      <strong className="font-bold">Attention: </strong>
      <span className="block sm:inline">{message}</span>
      <button onClick={() => setIsVisible(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-yellow-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 12.196 7.349 14.849a1.2 1.2 0 1 1-1.697-1.697l2.651-2.652-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 7.196l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 8.548l2.651 2.652a1.2 1.2 0 0 1 0 1.699z"/></svg>
      </button>
    </div>
  );
};
