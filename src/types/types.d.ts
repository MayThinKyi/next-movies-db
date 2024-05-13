interface IGenre{
    id:number;
    name:string;
}
interface IProductionCompany{
    id:number;
    logo_path:string;
    name:string;
}
interface IMovieDetails{
    id:number;
    backdrop_path:string;
    budget:number;
    revenue:number;
     genres:IGenre[];
    homepage:string;
    overview:string;
    popularity:string;
    poster_path:string;
    production_companies:IProductionCompany[];
    release_date:string;
    runtime:number;
    status:string;
    title:string;
    vote_average:number;
    spoken_languages:{name:string}[];
 }

interface IMovie{
    backdrop_path:string;
    id:number;
    poster_path:string;
    title:string;
    vote_average:number;
    release_date:string;
    overview:string;
}

interface IMovieResponse{
    page:number;
    results:IMovie[];
    total_pages:number;
}
interface IMovieVideo{
    name:string;
    site:string;
    type:'Trailer' | 'YouTube' | 'Featurette';
    published_at:string;
    id:string;
    key:string;
}
interface IMovieVideoResponse{
    id:number;
    results:IMovieVideo[]
}
interface IPerson{
    id:number;
    known_for_department:string;
    name:string;
    original_name:string;
    profile_path:string;
    character:string;
}
interface IMoviePersonResponse{
    id:number;
    cast:IPerson[];
    crew:IPerson[];
}

interface IMovieImage{
    file_path:string;
 }
interface IMovieImageResponse{
    backdrops?:IMovieImage[];
    logos?:IMovieImage[];
    posters?:IMovieImage[];
}
interface IWatchProvider{
    link:string;
    rent:{logo_path:string;provider_name:string}[];
    buy:{logo_path:string;provider_name:string}[];
 }
 interface IWatchProviderResponse{
    id:number;
    results:{
        [key:string]:IWatchProvider
    }
 }

interface ITV{
    backdrop_path:string;
    poster_path:string;
    id:number;
    name:string;
    overview:string;
    vote_average:number;
    first_air_date:string;
}
interface ITVResponse{
    page:number;
    results:ITV[];
    total_pages:number;
}
interface ITvVideo{
    name:string;
    site:string;
    type:'Trailer' | 'YouTube' | 'Featurette';
    published_at:string;
    id:string;
    key:string;
}
interface ITvVideoResponse{
    id:number;
    results:ITvVideo[]
}
interface ISeason{
    id:number;
    name:string;
    episode_count:number;
}
interface ITvDetails{
    backdrop_path:string;
    created_by:{name:string;}[];
    first_air_date:string;
    genres:IGenre[];
    homepage:string;
    id:number;
    last_air_date:string;
    name:string;
    networks:{name:string;}[];
    number_of_episodes:number;
    number_of_seasons:number;
    overview:string;
    poster_path:string;
    production_companies:IProductionCompany[];
    spoken_languages:{name:string;}[];
    status:string;
    vote_average:number;
    seasons:ISeason[];
}
 
interface ITvWatchProvider{
     logo_path:string;provider_name:string;
     
}
interface ITvWatchProviderResponse{
    id:number;
    results:{
        AU:{
            ads:ITvWatchProvider[]
        }
    }
}

 interface IMultiResponse{
    page:number;
     results:{
         id:number;
        [string:string]:string;
        vote_average?:number;
        media_type:'tv'|'movie'|'person';
        poster_path:string;
    }[];
    total_pages:number;
 }
 interface IPersonDetails{
    also_known_as:string[];
    biography:string;
    birthday:string;
    id:number;
    imdb_id:string;
    known_for_department:string;
    name:string;
    place_of_birth:string;
    profile_path:string;
 }
 interface IPersonCast{
    name:string;
    first_air_date:string;
    character:string;
    episode_count:number;
 }
 interface IPersonCrew{
    first_air_date:string;
    name:string;
    episode_count:number;
    job:string;
 }
 interface IPersonCredits{
    cast:IPersonCast[];
    crew:IPersonCrew[];
 }
 interface IPersonImageResponse{
    profiles:{file_path:string}[];
 }
 interface IPersonMovieResponse{
    cast:IMovie[];
 }
 interface IPersonTvResponse{
    cast:ITV[];
 }