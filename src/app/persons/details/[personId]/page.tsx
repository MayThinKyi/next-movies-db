import PersonDetails from '@/components/PersonDetails';
import actorService from '@/services/actorService';
import React from 'react'

interface Props {
    params: {
        personId: string;
    }
}
export async function generateMetadata({ params: { personId } }: Props) {
    const person = await actorService.getPerson<IPersonDetails>(`/person/${personId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    return {
        title: person?.name,
        description: person?.biography
    }
}

const PersonDetailsPage = async ({ params: { personId } }: Props) => {
    const person = await actorService.getPerson<IPersonDetails>(`/person/${personId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const credits = await actorService.getPerson<IPersonCredits>(`/person/${personId}/tv_credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const images = await actorService.getPerson<IPersonImageResponse>(`/person/${personId}/images?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const movies = await actorService.getPerson<IPersonMovieResponse>(`/person/${personId}/movie_credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const series = await actorService.getPerson<IPersonTvResponse>(`/person/${personId}/tv_credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div className='py-10 px-5 sm:px-24'>
            <div className="flex flex-wrap md:flex-nowrap gap-5">
                <img src={person?.profile_path ? `https://image.tmdb.org/t/p/w500${person?.profile_path}` : '/notFound.png'} alt={person?.name!} />
                <div className='md:w-[80%]'>
                    <h1 className="text-2xl font-bold mb-5">{person?.name}</h1>
                    <p>{person?.biography}</p>
                </div>
            </div>
            <PersonDetails credits={credits!} images={images!} movies={movies!} series={series!} personId={person?.id!} />
        </div>
    )
}

export default PersonDetailsPage
