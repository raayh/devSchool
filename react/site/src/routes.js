import { BrowserRouter, Switch, Route } from 'react-router-dom'

import devSchool from './pages/devSchool'
import error from './pages/error'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={devSchool} />
                <Route path="*" component={error} /> 
            </Switch>
        </BrowserRouter>
    )
}