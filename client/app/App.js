import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../node_modules/@coreui/icons/css/coreui-icons.min.css';
import '../../node_modules/flag-icon-css/css/flag-icon.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/simple-line-icons/css/simple-line-icons.css';
import './styles/style.css'
import Layout from './components/Layout'
import { Login, Page404, Page500, Register } from './views/Pages';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                      <Route exact path="/login" name="Login Page" component={Login} />
                      <Route exact path="/register" name="Register Page" component={Register} />
                      <Route exact path="/404" name="Page 404" component={Page404} />
                      <Route exact path="/500" name="Page 500" component={Page500} />
                      <Route path="/" name="Home" component={Layout} />
                    </Switch>
                </Layout>

            </BrowserRouter>
        );
    }
}
export default App;
