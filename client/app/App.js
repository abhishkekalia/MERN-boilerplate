import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../node_modules/@coreui/icons/css/coreui-icons.min.css';
import '../../node_modules/flag-icon-css/css/flag-icon.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/simple-line-icons/css/simple-line-icons.css';
import './styles/style.css'
// import NotFound from './components/App/NotFound';
// import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Layout from './components/Layout'
// import './styles/styles.scss';
// import { Login, Page404, Page500, Register } from './views/Pages';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Layout}/>
                        <Route path="/helloworld" component={HelloWorld}/>
                    </Switch>
                </Layout>

            </BrowserRouter>
        );
    }
}
export default App;
