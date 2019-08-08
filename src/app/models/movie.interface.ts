import { MovieComment } from './movie-comment.interface';

export interface Movie {
    id: number;
    title: string;
    image: string;
    resume: string;
    duration: number;
    traileryt: string;
    genre: string[];
    actors: string[];
    director: string;
    date: string;
    comments: MovieComment[];
}