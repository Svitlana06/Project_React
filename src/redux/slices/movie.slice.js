import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page, sort_by,with_genres}) => {
        const {data} = await movieService.getAllMovies(page, sort_by, with_genres)
        return data
    }
)

const initialState = {
    movies: [],
    next: null,
    prev: null,
    total_pages: null,
    singleMovie:0,
    sort_by:'vote_average.desc',
    with_genres:true,
    changeColor:0
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        singleMovie: (state, action) => {
            state.singleMovie = action.payload
            const {adult,backdrop_path, genre_ids,id, original_language,original_title,
                overview, popularity,poster_path,release_date,title,video, vote_average,vote_count }=singleMovie
            console.log(state.singleMovie.backdrop_path)
        },
        sortMovies:(state, action)=>{
            state.sort_by=action.payload
        },
        getGenres:(state, action)=>{
            state.with_genres=action.payload
        },
        changeBackground:(state, action)=>{
            state.changeColor=action.payload
            console.log(state.changeColor)
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(
                getAllMovies.fulfilled, (state, action) => {
                    state.movies = action.payload
                    const {page, total_pages} = action.payload
                    state.total_pages = total_pages
                    state.page = page
                })

    }
})
const {reducer: movieReducer, actions: {singleMovie,sortMovies,getGenres, changeBackground}} = movieSlice
const movieActions = {
    getAllMovies,
    singleMovie,
    sortMovies,
    getGenres,
    changeBackground

}
export {movieReducer, movieActions}


