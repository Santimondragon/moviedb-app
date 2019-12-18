import React from "react";
import "./Movies.scss";
import Movie from "../Movie/Movie";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Movies() {
  return (
    <section id="movies">
      <h3 className="title">Movies</h3>
      <ul className="movieList">
        <Movie />
        
        <li className="movie">
          <div className="bg">
            <img
              className="poster"
              src="https://image.tmdb.org/t/p/w185/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg"
              alt="bg"
            />
          </div>
          
          <section className="information">
            <h1 className="title">6 Underground</h1>
            <p className="rating">
              <b>6.1</b>/10
            </p>
            <p className="runtime">2h 7m</p>
            <ul className="genreList">
              <li className="genre">Action</li>
              <li className="genre">Thriller</li>
            </ul>
            <p className="tagline">
              They say no one can save the world. MEET NO ONE.
            </p>
            <article>
              <button className="favorite">
                <FontAwesomeIcon icon={faStar} className="icon" />
              </button>
              <button className="details">View Details</button>
            </article>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default Movies;
