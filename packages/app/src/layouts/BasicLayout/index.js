import React from 'react';
import { Switch, Redirect, Route } from 'dva/router';
import Loading from 'components/lib/Loading';
import Dashboard from '../../routes/Dashboard';
import styles from './index.module.less';

const BasicLayout = () => (
  <div className={styles.center}>
    <Switch>
      <Route path="/" exact component={Loading} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="(.*)" to="/" />
    </Switch>
  </div>
);

export default BasicLayout;
