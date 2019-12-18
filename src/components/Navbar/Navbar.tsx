import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

function NavBar() {
    return (
        <section id="navbar">
            <section className="profile">
                <img src="./assets/images/profile.jpg" alt="Profile" className="picture"/>
                <h1 className="name">Santiago Mondragón</h1>
                <p className="nickname">@santimondragon</p>
                <span className="status">Premium</span>
            </section>
            <section className="menu">
                <article className="item">
                    <span>•</span>
                    <span>Search</span>
                </article>
                <Link className="item" to="/movies">
                    <span>•</span>
                    <span>Movies</span>
                </Link>
                <Link className="item" to="/favorites">
                    <span>•</span>
                    <span>Favorites</span>
                </Link>
                <Link className="item" to="/lists">
                    <span>•</span>
                    <span>My Lists</span>
                </Link>
            </section>
        </section>
    );
}

export default NavBar;