import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Button} from "react-bootstrap";
import css from './sorting.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";

const Sorting = () => {

    const {sort} = useSelector(state => state.movies)
    const dispatch=useDispatch()

    const sortByRating=(sort_by)=>{
        sort_by='vote_average.desc'
        dispatch(movieActions.sortMovies(sort_by))
        console.log(sort_by)
    }

    const sortByDate=(sort_by)=> {
        sort_by='release_date.desc'
        dispatch(movieActions.sortMovies(sort_by))
        console.log(sort_by)
    }

    const sortByPopularity=(sort_by)=> {
        sort_by='popularity.desc'
        dispatch(movieActions.sortMovies(sort_by))
        console.log(sort_by)
    }
    return (
        <div className={css.menuOpen}>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className={css.singleMenuOpen} onClick={sortByRating}>By rating</Button>
            <Button variant="secondary" className={css.singleMenuOpen} onClick={sortByDate}>By date</Button>
            <Button variant="secondary" className={css.singleMenuOpen} onClick={sortByPopularity}> By popularity</Button>
        </ButtonGroup></div>
    );
}

export default Sorting;