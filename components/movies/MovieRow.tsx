import { Movie } from '@/lib/generated/prisma';
import React from 'react'
import MovieCard from './MovieCard';


const MovieRow = ({ title, movies }: { title: string; movies: Movie[] }) => {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-between px-4 sm:px-8'>
                <h2 className='"text-xl font-bold text-white'>
                    {title}
                </h2>
            </div>
            <div className='relative'>
                <div className='flex space-x-4 px-4 md:px-8 py-2'>
                    
                    {
                        movies.map((movie) => (
                            <div key={movie.id} className='flex-none '>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieRow