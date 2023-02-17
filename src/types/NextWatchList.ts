import {IUser} from './User'
export interface ICard {
    name: string
    overview: string
    SE?: { season: number, episode: number }
    poster_path: string,
    id: number,
    watched: Boolean,
    user: IUser
}

export interface TVCard {

}

export interface MovieCard {

}
