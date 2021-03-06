import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
import DefaultHeader from '../DefaultHeader';
import DefaultFooter from '../DefaultFooter';
import DefaultAside from '../DefaultAside';
import routes from '../../routes';
import nav from '../../_nav';

export default class Layout extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader fixed>`
                    <DefaultHeader />
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <AppSidebarNav navConfig={nav} {...this.props}/>
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <Container fluid>
                           <Switch>
                             {
                               routes.map((route, idx) => {
                                 return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                   <route.component {...props} />
                                   )} />
                                   ) : (null);
                                 },
                               )
                             }
                             <Redirect from="/" to="/dashboard" />
                           </Switch>
                        </Container>
                    </main>
                    <AppAside fixed hidden>
                        <DefaultAside />
                    </AppAside>
                </div>
                <AppFooter>
                    <DefaultFooter />
                </AppFooter>
            </div>
        );
    }
}
