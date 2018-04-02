import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './Routes';
import renderer from './server/renderer';
import createStore from './server/createStore';
const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store, req.path) : null;
    });
    Promise.all(promises).then( () => {
        res.send(renderer(req, store));
    });   
});
app.listen(8080, () => {
    console.log('Listening on port 8080');
})