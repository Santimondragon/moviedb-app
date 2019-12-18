import * as React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Favorites from '../../components/Favorites/Favorites';
import Movies from '../../components/Movies/Movies';
import { store } from '../../stores/Store';
import { Switch, Route, Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import './Home.scss';
import Recomendation from '../../components/Recomendations/Recomendations';

function Home() {
    return useObserver(() => (
        <section id="home">
            <Topbar/>
            <Recomendation/>
            <Favorites/>
            <Movies/>
        </section>
    ));
}

export default Home;


/* 
https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg
https://api.themoviedb.org/3/movie/popular?api_key=e01547dc04c1a3b9945d0731b2b8f86d&language=en-US&page=1

<h1> Nombre: {store.name} </h1>
<button onClick={() => store.aFunction(Date.now())}>Cambiar nombre</button>
*/