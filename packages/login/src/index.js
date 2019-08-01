import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import dva from 'dva';
// import createLoading from 'dva-loading';
import * as serviceWorker from './serviceWorker';
import './index.module.less';

// 1. Initialize
const app = dva({});

// 2. Plugins
// app.use(createLoading());

// 3. Register global model
// app.model(require('../models/app').default);

// 4. Router
// app.router(router);
app.router(require('./routers/app').default);

// 5. Start
app.start('#root');

serviceWorker.register();

export default app._store; // eslint-disable-line
