import React, {useEffect, useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import css from './header.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import {genresService} from "../../services/genre.service";
import {movieActions} from "../../redux/slices/movie.slice";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import img from './photoUser.jpg'
import Button from "react-bootstrap/Button";


const Header = () => {

    const [changeColors, setChangeColors] = useState(true)
    const {changeColor}=useSelector(state => state.movies)

    function changeBackground() {
        setChangeColors(!changeColors)
        dispatch(movieActions.changeBackground(changeColors))
    }

    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);
    const [genreId, setGenreId] = useState(true);
    const [genre, setGenre] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [nameUserEv, setNameUserEv]=useState('User')
    useEffect(() => {
        genresService.getAllGenres().then(({data}) => setGenre(data))
        dispatch(movieActions.getGenres(genreId))
    }, [genreId, changeColor, nameUserEv])
    const {genres} = genre
    const [x, setX] = useState(0);


    function displayCalendar() {
        let a = document.getElementById('calendar')
        let b = document.getElementById('text')
        if (a.style.display === 'none') {
            a.style.display = 'block'
            b.style.display = 'block'
        } else if (a.style.display === 'block') {
            a.style.display = 'none'
            b.style.display = 'none'
        }
    }

    function displayFormUser(e) {
        let d = document.getElementById('formUser')
        if (d.style.display === 'none') {
            d.style.display = 'block'
        } else if (d.style.display === 'block') {
            d.style.display = 'none'
        }
    }

    function displayFormNewUser(e) {
        console.log(nameUserEv)

    }


    return (
        <div className={css.header}>

            <div className={css.menu}><Link to={'/'} className={css.menuText} onClick={handleShow}>
                Menu
            </Link></div>
            <Offcanvas show={show} onHide={handleClose} className={css.movieMenu}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={css.headerNameBody}>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Movies</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>TV Shows</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Music</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Audiobooks</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Games</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Apps</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Updates</Link></div>
                    <div><Link to={'/'} className={css.headerNameBodyOne}>Setting</Link></div>

                </Offcanvas.Body>
            </Offcanvas>

            <Form>
                <select onChange={(e) => setGenreId(`${e.target.value}`)} className={css.menuGenres}>
                    <option value={true}>All Genres</option>
                    <option className={css.menuGenresOne} value={genres && genres[0].id}>{genres && genres[0].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[1].id}>{genres && genres[1].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[2].id}>{genres && genres[2].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[3].id}>{genres && genres[3].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[4].id}>{genres && genres[4].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[5].id}>{genres && genres[5].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[6].id}>{genres && genres[6].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[7].id}>{genres && genres[7].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[8].id}>{genres && genres[8].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[9].id}>{genres && genres[9].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[10].id}>{genres && genres[10].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[11].id}>{genres && genres[11].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[12].id}>{genres && genres[12].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[13].id}>{genres && genres[13].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[14].id}>{genres && genres[14].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[15].id}>{genres && genres[15].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[16].id}>{genres && genres[16].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[17].id}>{genres && genres[17].name}</option>
                    <option className={css.menuGenresOne} value={genres && genres[18].id}>{genres && genres[18].name}</option>
                </select>

            </Form>

            <div>
                <div className='app'>
                    <div className={css.menu} onClick={displayCalendar}><Link to={'/'} className={css.menuText}>

                        All time </Link></div>
                    <div id='calendar' style={{display: 'none'}} className={css.calendar}>
                        <Calendar onChange={setDate} value={date} selectRange={true}/>
                    </div>
                    {date.length > 0 ? (
                        <p className={css.calendarText}>
                            <span>Start:</span> {' '} {date[0].toDateString()}

                            &nbsp; to &nbsp;
                            <span>End:</span> {date[1].toDateString()}
                        </p>
                    ) : (
                        <p id='text' style={{display: 'none'}} className={css.calendarText}>
                            <span>Default selected date:</span>{' '} {date.toDateString()}
                        </p>
                    )}
                </div>
            </div>




            <div>
            <div className={css.menu}>
                <div onClick={displayFormUser}><Link to={'/'} className={css.menuTextUser}> {nameUserEv} </Link></div>
                <img src={img} alt="photo User" className={css.menuImgUser}/></div>

                <Form style={{display: 'none'}} id={'formUser'} className={css.formUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onSubmit={(e) => setNameUserEv(`${e.target.value}`)} type="email" placeholder="Enter UserName" />
                        <Form.Text className="text-muted">
                            We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={displayFormNewUser} style={{background:'brown', border:'none'}} >
                        Submit

                    </Button>
                </Form>
            </div>




            <Form className={css.switchForm} onClick={changeBackground}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Dark fon"
                />
            </Form>


        </div>

    );
}

export
{
    Header
}
    ;

