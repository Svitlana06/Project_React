import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom'
import css from './movieList.module.css'
import {Link} from "react-router-dom";
import {movieActions} from "../../redux/slices/movie.slice";
import {useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'

const MovieList = ({movie}) => {

    const [singleMovie, setSingleMovie]=useState([])
    const {adult,backdrop_path, genre_ids,id, original_language,original_title,
        overview, popularity,poster_path,release_date,title,video, vote_average,vote_count}=movie

    const dispatch=useDispatch()
    const navigate=useNavigate()
    function toSingle() {
        dispatch(movieActions.singleMovie({adult,backdrop_path, genre_ids,id, original_language,original_title,
            overview, popularity,poster_path,release_date,title,video, vote_average,vote_count }))
        navigate(movie.id)
        console.log(movie)
    }

    return (
        <div className={css.imageText}>

            <div onClick={()=>{toSingle()}}>

                    {['bottom'].map((placement) => (
                        <OverlayTrigger className={css.tooltipMovie}
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip>
                                    <strong>
                                        Original_title: </strong>{original_title}
                                        <br/><strong>Vote_average:</strong> {vote_average}
                                    <br/><strong> Release_date: </strong>{release_date}

                                </Tooltip>
                            }
                        >
                            <Link to={id.toString()} > <div className={css.mainImages}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={'Постер відсутній'} className={css.mainImages}/></div>
                            </Link>
                        </OverlayTrigger>
                    ))}

           </div>


        </div>
    );
};

export default MovieList;