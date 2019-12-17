import * as React from 'react';
import { store } from '../../stores/Store';
import { Link } from "react-router-dom";
import { useObserver } from 'mobx-react';

import './Home.scss';

function Home() {
    return useObserver(() => (
        <section>
            <h1> Nombre: {store.name} </h1>
            <button onClick={() => store.aFunction(Date.now())}>Cambiar nombre</button>
            <Link to="/movie">To Movie</Link>
        </section>
    ));
}

export default Home;