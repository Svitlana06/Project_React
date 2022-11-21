import React, {useEffect} from 'react';
import MovieList from "../movieList/movieList";
import css from "./moviesList.module.css";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../pagination/pagination";
import {movieActions} from "../../redux/slices/movie.slice";
import {Helmet} from "react-helmet";
import Sorting from "../sorting/sorting";


const MoviesList = () => {

    const {movies, next, prev, sort_by, with_genres,changeColor} = useSelector(state => state.movies)
    const {page, results,total_pages}=movies
    let location = useLocation()

    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page: query.get('page'), sort_by:sort_by, with_genres: with_genres}))    }, [query, sort_by,with_genres])


    function prevPage() {
        const prevPage = +query.get('page') - 1
        if (prevPage>0){
        setQuery({page: `${prevPage}`})}
    }

    function nextPage() {
        const nextPage = +query.get('page') + 1
        if (nextPage<=total_pages){
        setQuery({page: `${nextPage}`})}
    }


    let className=css.mainPageLight;
    if (changeColor===true) {
        className = css.mainPageDark}
    if (changeColor===false) {
        className = css.mainPageLight}

    return (
            <div className={className}>
                    <div className={css.sorting}>
                        <Sorting/>
                   <div> <div  className={css.moviesList}>{results && results.map(movie => <MovieList key={movie.id} movie={movie}/>)}</div></div>
                    <div className={css.buttonsPage}><button disabled={prev} onClick={prevPage} className={css.buttonPage}>Prev</button>
                    <Pagination/>
                    <button disabled={next} onClick={nextPage} className={css.buttonPage}>Next</button></div>
            </div>
            </div>
    );
};

export default MoviesList;