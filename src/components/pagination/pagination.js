import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "../pagination/pagination.module.css";

const Pagination = () => {
    const {total_pages, page}=useSelector(state=>state.movies)
    const countPagesArray=[];

    const params=useParams()
    const [numberPage, setNumberPage]=useSearchParams({page: params.id})
    let dispatch=useDispatch()


    const numberPageClick=(number)=>{
        setNumberPage({page: `${number}`})
    }

    for (let i=page; i<=+(page+2); i++){
        countPagesArray.push(i)
    }


    useEffect(() => {
        dispatch(movieActions.getAllMovies({page: numberPage.get('page')}))
    }, [numberPage])


    return (
        <div  className={css.pages}>
            {countPagesArray.map(number=>(
                <div key={number} className={css.page} onClick={()=>{numberPageClick(number)}} value={number} state={number}>
                    {number}
                </div>))}...<div className={css.page}>{total_pages}</div></div>

    );
};

export default Pagination;



// {countPagesArray.map(number=>(
//     <div key={number} onClick={()=>{numberPageClick(number)}} value={number} state={number}>
//         {number}
//     </div>