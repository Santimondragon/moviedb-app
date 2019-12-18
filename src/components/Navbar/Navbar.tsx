import React from 'react';
import { Link } from 'react-router-dom';
import { faSearch, faFilm, faStar, faList, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

function NavBar() {
    return (
      <section id="navbar">
        <section className="profile">
          <img
            src="./assets/images/profile.jpg"
            alt="Profile"
            className="picture"
          />
          <h1 className="name">Santiago Mondragón</h1>
          <p className="nickname">@santimondragon</p>
          <span className="status">Premium</span>
        </section>

        <section className="menu">
          <article className="item">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input id="search" type="text" placeholder="Browse"/>
          </article>
          <Link className="item active" to="/movies">
            <FontAwesomeIcon icon={faFilm} className="icon" />
            <span>Movies</span>
          </Link>
          <Link className="item" to="/favorites">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <span>Favorites</span>
          </Link>
          <Link className="item" to="/lists">
            <FontAwesomeIcon icon={faList} className="icon" />
            <span>My Lists</span>
          </Link>
          <Link className="item" to="/login">
            <FontAwesomeIcon icon={faDoorOpen} className="icon" />
            <span>Log Out</span>
          </Link>
        </section>
      </section>
    );
}

export default NavBar;