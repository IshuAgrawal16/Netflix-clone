"use client"
import React, { useActionState, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import Upload from './upload-imagekit'
import { uploadVideoAction } from '@/actions/upload'

type Props = {}

const Uploadformfield = (props: Props) => {
    const [videourl, setVideoUrl] = useState<string>("")
    const [thumbnailUrl, setThumbnailUrl] = useState<string>("")
    const [formState, action, isPending] = useActionState(uploadVideoAction, { errors: {} })

    const onSubmitHandler = (formData: FormData) => {
        formData.append("videoUrl", videourl);
        formData.append("thumbnailUrl", thumbnailUrl);
        return action(formData);
    }

    return (
        <div className='max-w-2xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-6'>Add new movie</h1>

            <form action={onSubmitHandler} className='space-y-6'>
                <div>
                    <Label htmlFor='title' className='block mb-2'>Movie Name</Label>
                    <Input
                        id="movieName"
                        name="movieName"
                        type="text"
                        placeholder="Enter movie name"
                    />
                    {formState.errors.movieName && (
                        <p className='text-red-500 text-sm mt-1'>
                            {formState.errors.movieName}
                        </p>
                    )}
                </div>
                <div>
                    <Label htmlFor='title' className='block mb-2'>
                        Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Enter movie name"
                    />
                    {formState.errors.description && (
                        <p className='text-red-500 text-sm mt-1'>
                            {formState.errors.description}
                        </p>
                    )}
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='category' className='block mb-2'>
                        Category
                    </Label>
                    <Select name='category'>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Trailer">Trailer</SelectItem>
                            <SelectItem value="Popular">Popular</SelectItem>
                            <SelectItem value="Upcoming">Upcoming</SelectItem>
                            <SelectItem value="horror">Horror</SelectItem>
                        </SelectContent>
                    </Select>
                    {
                        formState.errors.category && (
                            <p className='text-red-500 text-sm mt-1'>
                                {formState.errors.category}
                            </p>
                        )
                    }
                </div>

                <div className='"space-y-6'>
                    <Label>Thumbnail file</Label>
                    <Upload setThumbnailUrl={setThumbnailUrl} />
                </div>

                <div className='"space-y-6'>
                    <Label>Movie file</Label>
                    <Upload setVideoUrl={setVideoUrl} />
                    {formState.errors.videoUrl && (
                        <p className='text-red-500 text-sm mt-1'>
                            {formState.errors.videoUrl}
                        </p>
                    )}
                </div>

                <Button className='w-full' disabled={isPending} type="submit">
                    {
                        isPending ? "Submitting..." : "Submit"
                    }

                </Button>
            </form>
        </div>
    )
}

export default Uploadformfield