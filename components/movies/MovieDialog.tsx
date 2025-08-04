"use client";

import { Movie } from '@/lib/generated/prisma';
import { Loader2, Play, X } from 'lucide-react';
import React, { FC, useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { IKImage } from 'imagekitio-next';
import { Button } from '../ui/button';
import { Video } from '@imagekit/next';

type MovieDialogProps = {
    movie: Movie;
    children: React.ReactNode;
}



const MovieDialog: FC<MovieDialogProps> = ({ movie, children }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hashError, setHasError] = useState<boolean>(false);


    const handleOpen = () => {
        setIsOpen(true);
        setIsLoading(true);
        setHasError(false);
    }

    return (
        <>
            <div className='cursor-pointer group relative ' onClick={handleOpen}>
                {children}
                <div className='absolute inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white/90 p-3 rounded-full transform scale-90 group-hover:scale-110 transition-transform'>
                        <Play className='text-black w-6 h-6' />

                    </div>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className='sd:max-w-5xl bg-black p-0 aspect-video border-none overflow-hidden'>
                        <DialogTitle >
                            {movie.movieName}
                        </DialogTitle>
                        {
                            isLoading && (
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <Loader2 className='w-12 h-12 animate-spin text-white' />
                                </div>
                            )}

                        {
                            hashError ? (
                                <div className='relative h-full'>
                                    {
                                        movie.thumbnailUrl ? (
                                            <IKImage
                                                urlEndpoint='https://ik.imagekit.io/6cpq39pdi'
                                                path={movie.thumbnailUrl}
                                                transformation={[{ quality: 720, height: 1280 }]}
                                                alt='Movie Thumbnail'
                                                className='object-cover w-full h-full opacity-50'
                                            />
                                        ) : (
                                            <div className='w-full h-full bg-gray-800'></div>
                                        )
                                    }
                                    <div className='absolute inset-0  flex items-center justify-center'>
                                        <p className='text-white text-lg'>Error loading movie details</p>
                                    </div>
                                </div >
                            ) : (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className='abolute right-2 top-2 z-50 text-white hlover:bg-white/10 rounded-full'
                                    >
                                        <X className='w-5 h-5' />
                                    </Button>

                                    <Video
                                        src="/netflix-uploads/trailer_9cxGA4u0X9.mp4"
                                        transformation={[{ quality: 80, height: 720 }]}
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </>
                            )
                        }
                    </DialogContent>
                </Dialog>

            </div>
        </>
    )
}

export default MovieDialog