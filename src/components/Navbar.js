import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../App.css";

const PokeNavbar = () => {
    return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <div className="navbarTitle">
                <NavLink className={({ isActive }) => (isActive ? "navbarTitle__link--active" : "navbarTitle__link")} to="/">
                    <img src="https://i.postimg.cc/HLtmMDd0/casa.png" alt="Home" className="homeImg2" to="Home" />
                    <span className="homeText">Inicio</span>
                </NavLink>
                {" / "}
                <NavLink className={({ isActive }) => (isActive ? "navbarTitle__link--active" : "navbarTitle__link")} to="/Pokemon">
                    <img src="https://i.postimg.cc/FsY6vt6W/pngegg.png" alt="Pokemon" className="pokeImg" to="Lista Pokemon" />
                    <span className="homeText">Lista Pokemon</span>
                </NavLink>

            </div>
        </Navbar>
    );
};
export default PokeNavbar;
