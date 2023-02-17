export interface ISearchMovie {
    overview: string,
    id: number,
    title: string,
    release_date: string,
    poster_path: string
}

export interface ISearchTV {
    overview: string,
    id: number,
    name: string,
    release_date: string,
    episode_number: number
    poster_path: string
}

export interface ITVEpisode {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    season_number: number,
    still_path: string,
}

export interface ITVProps {
    title_id: number,
    title: string,
    name: string
    poster_path: string,
    last_air_date: string,
    overview: string,
    seasons: any[]
}