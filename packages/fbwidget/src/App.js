import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Products from './components/Products';

const generateClassName = createGenerateClassName({
    productionPrefix: 'mar',
});
export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
            <Route path="/" component={Products} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};



