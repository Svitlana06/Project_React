import React from 'react';
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import singleMovie from "./singleMovie";
import css from "./singeMovie.module.css";
import Button from "react-bootstrap/Button";

const SingleMovie = () => {

    const {singleMovie,changeColor} = useSelector(state => state.movies)
    const {adult,backdrop_path, genre_ids,id, original_language,original_title,
        overview, popularity,poster_path,release_date,title,video, vote_average,vote_count}=singleMovie


    let className=css.singlePageLight;
    if (changeColor===true) {
        className = css.singlePageDark}
    if (changeColor===false) {
        className = css.singlePageLight}

    return (
        <div className={className}>
        <div className={css.singleMovie}>
             <div className={css.mainImages}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={'Постер відсутній'} className={css.mainImages}/></div>
        <div className={css.singlePageText}>
            <div className={css.singlePageTitle}>{title}</div>
            <div className={css.singlePageWithoutTitle}><strong>ong Original_language:</strong> {original_language}</div>
            <div className={css.singlePageWithoutTitle}><strong>Popularity: </strong>{popularity}</div>
            <div className={css.singlePageWithoutTitle}><strong>Release_date: </strong>{release_date}</div>
            <div className={css.singlePageWithoutTitle}><strong>Vote_average: </strong>{vote_average}</div>
            <div className={css.singlePageWithoutTitle}><strong>Vote_count: </strong>{vote_count}</div>
            <div className={css.singlePageWithoutTitle}><strong>Overview: </strong>{overview}</div>

        </div></div>
            <div> <Link to={'/discover/movie?page=1'}><button className={css.buttonPage}>Готовна сторінка</button></Link></div>
        </div>
    );
};

export default SingleMovie;