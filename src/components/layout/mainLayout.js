
import {HeaderPage} from "../../pages/headerPage";
import MoviesPage from "../../pages/moviesPage";
import {Outlet} from "react-router-dom";
import css from './mainLayout.module.css'
import {Header} from "../header/header";

const MainLayout = () => {
    return (
        <div>
        <HeaderPage/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};