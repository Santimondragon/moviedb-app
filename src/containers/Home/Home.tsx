import * as React from 'react';
import { store } from '../../stores/Store';
import { Switch, Route, Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import './Home.scss';

function Home() {
    return useObserver(() => (
        <section>
            <h1> Nombre: {store.name} </h1>
            <button onClick={() => store.aFunction(Date.now())}>Cambiar nombre</button>
            <Link to="/">To Home</Link>
        </section>
    ));
}

export default Home;


/* 
https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg
https://api.themoviedb.org/3/movie/popular?api_key=e01547dc04c1a3b9945d0731b2b8f86d&language=en-US&page=1
*/