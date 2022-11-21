import {axiosService} from "./axios.service";
import {urls} from "../constants";

const genresService={
    getAllGenres:()=>axiosService.get(urls.genres)

}
export {genresService}
