import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'dva';
import { Card, Button, Result } from 'antd';
import styles from './index.module.less';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => ({
    userInfo: state.app.userInfo,
  }));

  const onLogout = React.useCallback(() => {
    dispatch({ type: 'app/logout' });
  }, [dispatch]);

  return (
    <Card className={styles.dashboard}>
      <Result
        status="success"
        title="登录成功"
        subTitle={
          <>
            <div>用户名: {userInfo.username}</div>
            <div>昵称: {userInfo.usertitle}</div>
          </>
        }
        extra={<Button onClick={onLogout}>注销</Button>}
      />
    </Card>
  );
};

// Dashboard.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   userInfo: PropTypes.object.isRequired,
// };

export default React.memo(Dashboard);

// export default connect(state => ({
//   userInfo: state.app.userInfo,
// }))(Dashboard);
