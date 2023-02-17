export interface IDadabaseProps {
    name: string,
    title?: string,
    overview: String,
    poster_path: string,
    release_date: string,
}
export interface ICard {
    id: number
    poster_path: string,
    name: string,
    title: string
    release_date: string,
    first_air_date: string
    href?: String | number,
    overview: String,
    type: "tv"  | "movies" | "animes"
}

export interface IPageMovie{
    id: number
    poster_path: string,
    name: string,
    title: string
    release_date: string,
    first_air_date: string
    overview: string,
    type: "tv"  | "movies" | "animes"
}