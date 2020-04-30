/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import BasicLayout from '../layouts/BasicLayout';

const RouterConfig = ({ history, app }) => (
  <ConfigProvider locale={zhCN}>
    <Router history={history}>
      <Switch>
        <Route path="(.*)" render={(props) => <BasicLayout {...props} app={app} />} />
      </Switch>
    </Router>
  </ConfigProvider>
);

RouterConfig.propTypes = {
  app: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default RouterConfig;
