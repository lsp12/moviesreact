import axios from 'axios';
import { IMovie } from '../interface';

const API = process.env.API || 'https://portafolioback2.herokuapp.com/api';

export const getMovies = async () => {
    return await axios.get<IMovie[]>(`${API}/project`);
}

export const getMovie = async (id: string) => {
    return await axios.get<IMovie>(`${API}/IMovie/${id}`);
}

export const createMovie = async (IMovie: IMovie, config: any) => {
    return await axios.post(`${API}/IMovie`, IMovie, config);
}

export const editMovie = async (id: string, IMovie: IMovie, config: any) => {
    return await axios.put(`${API}/IMovie/${id}`, IMovie, config);
}

export const deleteMovie = async (id: string | undefined) => {
    return await axios.delete(`${API}/project/${id}`)
}