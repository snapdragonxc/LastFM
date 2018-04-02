import React from 'react';
import App from './client/App';
import Home from './client/components/Home';
import Artists from './client/components/Artists';
import Artist from './client/components/Artist';


export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                exact: true,
                ...Home,

            }, {
                path: '/artists/:country',
                exact: true,
                ...Artists,
            }, {
               path: '/artists/:country/:page',
                ...Artists
            }, {
                path: '/artist/:name',
                exact: true,
                ...Artist,
            }, {
               path: '/artist/:name/:page',
                ...Artist
            }
        ]
    }
];

