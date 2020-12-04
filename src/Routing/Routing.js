import FormSubmit from '../Pages/FormSubmit';
import Result from '../Pages/Result';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function Routing(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/Home" component={FormSubmit} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Result" component={Result} />
            </Switch>
        </Router>
    );
}

export default Routing;