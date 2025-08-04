import React from 'react'
import type { Movie } from '@/lib/generated/prisma';
import MovieDialog from './MovieDialog';
import { IKImage } from 'imagekitio-next';
import { Image } from '@imagekit/next';

const MovieCard = ( {movie}: {movie : Movie} ) => {
  return (
    <MovieDialog movie={movie}>
        <div className='relative h-48 min-w-[200px] md:h-56 md:min-w-[300px]'>
            <Image
            urlEndpoint='https://ik.imagekit.io/6cpq39pdi'
            className='object-cover rounded-lg'
            src={movie.thumbnailUrl || ""}
            alt={movie.movieName}
            height={200}
            width={300}
            loading='lazy'
            />
        </div>
    </MovieDialog>
  )
}

export default MovieCard