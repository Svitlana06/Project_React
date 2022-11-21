import {Route, Navigate, Routes} from "react-router-dom";
import MoviesPage from "./pages/moviesPage";
import {MainLayout} from "./components/layout";
import SinglePage from "./pages/singlePage";
import css from "./App.module.css";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {

    const {changeColor}=useSelector(state => state.movies)

        let className=css.mainPageLight;
        if (changeColor===true) {
            className = css.mainPageDark}
    if (changeColor===false) {
        className = css.mainPageLight}

    return (
        <div className={className}>
        <Routes>
            <Route path={'/'} element={<MainLayout/>} classname={css.mainPage}>
                <Route index element={<Navigate to={'discover/movie?page=1'}/>}/>
                <Route path={'discover/movie'} element={<MoviesPage/>}/></Route>
                        <Route path={'discover/movie/:id'} element={<SinglePage/>}/>
                        {/*</Route>>*/}

        </Routes></div>
    );
}

export default App;

