
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService={
    getAllMovies:(page=1,sort_by="vote_average.desc",with_genres=true)=>axiosService.get(urls.movie, {params:{page,sort_by, with_genres}}),
}
export {movieService}

