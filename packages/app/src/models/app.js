import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import showModal from 'utils/lib/showModal';
import delay from 'utils/lib/delay';
import replaceState from 'utils/lib/replaceState';

const loadingPagePathname = '/';

const getUserInfo = () => {
  const { name, title, ...parsed } = queryString.parse(global.location.search);
  replaceState(parsed);
  if (name && title) {
    localStorage.setItem('username', name);
    localStorage.setItem('usertitle', title);
    return { username: name, usertitle: title };
  }
  const info = {
    username: localStorage.getItem('username'),
    usertitle: localStorage.getItem('usertitle'),
  };
  if (info.username && info.usertitle) {
    return info;
  }
  localStorage.removeItem('username');
  localStorage.removeItem('usertitle');
  return null;
};

const jump2login = () => {
  const search = queryString.stringify({ from: global.location.href });
  // 本地测试环境
  if ('localhost' === global.location.hostname && global.location.port) {
    global.location.replace(
      `${global.location.protocol}//${global.location.hostname}:${parseInt(global.location.port, 10) + 1}?${search}`,
    );
    return;
  }
  const pathname = global.location.pathname.replace(/(\/[^/]*)?$/, '/login');
  global.location.replace(`${global.location.origin}${pathname}?${search}`);
  // global.location.replace(`https://goblin-laboratory.github.io/lerna-react-template/login?${search}`);
};

export default {
  namespace: 'app',

  state: {
    userInfo: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'jump2loading', payload: history.location });
      return history.listen(({ pathname, search }) => {
        if (loadingPagePathname === pathname) {
          dispatch({ type: 'load', payload: search });
        }
      });
    },
  },

  effects: {
    *jump2loading({ payload }, { put }) {
      if (loadingPagePathname === payload.pathname) {
        return;
      }
      const parsed = queryString.parse(payload.search);
      const search = queryString.stringify({ ...parsed, pathname: payload.pathname });
      yield put(routerRedux.replace({ pathname: loadingPagePathname, search }));
    },
    *load({ payload }, { put, call }) {
      yield call(delay, 3000);
      const userInfo = getUserInfo();
      if (!userInfo) {
        yield put({ type: 'loginFaild' });
        return;
      }
      yield put({ type: 'save', payload: { userInfo } });
      const { pathname, ...parsed } = queryString.parse(payload);
      const search = queryString.stringify(parsed);
      yield put(routerRedux.replace({ pathname, search }));
      if (pathname) {
        yield put(routerRedux.replace({ pathname, search }));
      } else {
        yield put(routerRedux.replace('/dashboard'));
      }
    },
    *loginFaild({ payload }, { call, put }) {
      const content = (payload && payload.content) || '用户未登录，请登录';
      const confirmed = yield call(showModal, 'info', { title: '提示', content, okText: '去登录' });
      if (confirmed) {
        yield put({ type: 'save', payload: { userInfo: null } });
        jump2login();
      }
    },
    *logout({ payload }, { put, call }) {
      const confirmed = yield call(showModal, 'confirm', {
        title: '注销',
        content: '确认要退出登录吗？',
      });
      if (confirmed) {
        localStorage.removeItem('usertitle');
        yield put({ type: 'save', payload: { userInfo: null } });
        jump2login();
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
