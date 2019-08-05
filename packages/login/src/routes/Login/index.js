import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Form, Card, Input, Icon, Button, notification } from 'antd';
import delay from 'utils/lib/delay';
import styles from './index.module.less';

const getClientUrl = search => {
  const parsed = queryString.parse(global.location.search);
  if (parsed.from) {
    const parsedUrl = queryString.parseUrl(parsed.from);
    if (parsedUrl && parsedUrl.url) {
      const stringified = queryString.stringify({ ...parsedUrl.query, ...search });
      const matched = parsed.from.match(/^[^#]*(#.*)$/);
      const hash = (matched && matched[1]) || '';
      return `${parsedUrl.url}?${stringified}${hash}`;
    }
  }
  const stringified = queryString.stringify(search);
  if ('localhost' === global.location.hostname && global.location.port) {
    return `${global.location.protocol}//${global.location.hostname}:${parseInt(global.location.port, 10) -
      1}?${stringified}`;
  }
  if (global.location.pathname.match(/^(\/[\w-/]+)?\/login\/[\w-/]*$/)) {
    return `${global.location.origin}${global.location.pathname.replace(
      /^(\/[\w-/]+)?\/login\/[\w-/]*$/,
      '$1',
    )}?${stringified}`;
  }
  return `https://goblin-laboratory.github.io/cra-lerna-template/?${stringified}`;
};

const Login = ({ form }) => {
  const [loading, setLoading] = React.useState(false);
  const unmoutedRef = React.useRef(false);

  const onSubmit = React.useCallback(async values => {
    setLoading(true);
    await delay(1000);
    if (!unmoutedRef || unmoutedRef.current) {
      return;
    }
    if ('admin' !== values.username || '123456' !== values.password) {
      notification.error({ message: '用户名/密码错误' });
      setLoading(false);
      return;
    }
    notification.success({ message: '登录成功' });
    const clientUrl = getClientUrl({ name: values.username, title: values.usertitle });
    global.location.replace(clientUrl);
  }, []);

  React.useEffect(() => {
    return () => {
      unmoutedRef.current = true;
    };
  }, []);

  return (
    <Card className={styles.login}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          form.validateFieldsAndScroll((errors, values) => {
            if (!errors) {
              onSubmit(values);
            }
          });
        }}
      >
        <Form.Item>
          {form.getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" autoComplete="off" />)}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('usertitle', {
            rules: [{ required: true, message: '请输入用户昵称' }],
          })(<Input prefix={<Icon type="user" />} placeholder="请输入用户昵称" autoComplete="off" />)}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(<Input prefix={<Icon type="idcard" />} type="password" placeholder="请输入密码" autoComplete="off" />)}
        </Form.Item>
        <Form.Item help="用户名/密码：admin/123456">
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

Login.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create()(React.memo(Login));
