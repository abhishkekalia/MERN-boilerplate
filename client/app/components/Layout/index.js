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
// import routes from '../../routes';
import navigation from '../../_nav';

export default class Layout extends Component {
  render() {
    return (
        <div className="app">
            <AppHeader fixed>
      <DefaultHeader />
    </AppHeader>
    <div className="app-body">
      <AppSidebar fixed display="lg">
        <AppSidebarHeader />
        <AppSidebarForm />
          // <AppSidebarNav navConfig={navigation} {...this.props} />
          <AppSidebarFooter />
        <AppSidebarMinimizer />
      </AppSidebar>
      <main className="main">
        <Container fluid>
          <Switch>
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
