'use client';

import React from 'react';
import Image from 'next/image';

export const MovieComponent = ({ movie }: { movie: any }) => {
  return (
    <div>
      <Image
        src={movie.portraitImage}
        width={200}
        height={400}
        alt="Movie Image"
      />
    </div>
  );
};
