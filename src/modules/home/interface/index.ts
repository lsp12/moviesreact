export interface IMovie{
    id?: number;
    title: string;
    description: string;
    duration: string;
    image_url: string;
    created_at: string;
    updated_at?: string;
}
export interface IMovieComplete {
    movie_id: number;
    movie_title: string;
    movie_durantion: string;
    movie_image_url: string;
    movie_created_at: Date;
    movie_updated_at: Date;
}