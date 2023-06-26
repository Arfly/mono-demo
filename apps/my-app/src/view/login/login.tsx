import { Button, Card, Divider, Form, Input, Select, Space } from 'antd';
import './login.css';
import { BookOpen, KeyOne } from '@icon-park/react';
import PHONE_AREAS from '../../constants/phone-area';
import '../../assets/flag-icons/css/flag-icons.css';

function SelectPhoneArea() {
  return (
    <Select defaultValue="86" className="phone-area-selection">
      {PHONE_AREAS.map((phoneData) => (
        <Select.Option key={phoneData.phone_code} value={phoneData.phone_code}>
          <Space>
            <span className="phone-code">+{phoneData.phone_code}</span>
            <span
              className={`fi fi-${phoneData.country_code.toLowerCase()}`}
            ></span>{' '}
            {phoneData.chinese_name}
          </Space>
        </Select.Option>
      ))}
    </Select>
  );
}

export default function Login() {
  function login() {}

  return (
    <div className="login-container">
      <Space>
        <Card className="login-card">
          <div className="logo">
            <BookOpen
              theme="multi-color"
              size="48"
              fill={['#333', '#2F88FF', '#FFF', '#1677ff']}
            />
          </div>
          <Form name="basic">
            <Form.Item name="phone">
              <Space.Compact>
                <SelectPhoneArea></SelectPhoneArea>
                <Input></Input>
              </Space.Compact>
            </Form.Item>

            <Form.Item name="verifyCode">
              <Space direction="horizontal">
                <Input placeholder="6 位短信验证码" />
                <Button>获取验证码</Button>
              </Space>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                className="login-button"
                type="primary"
                htmlType="submit"
                onClick={() => {
                  login();
                }}
              >
                登录/注册
              </Button>
            </Form.Item>
            <div className="login-more-container">
              <Divider>其他登录方式</Divider>
              <Space className="third-part-wrapper">
                <Button>
                  <KeyOne theme="outline" size="24" fill="#333" />
                  密码登录
                </Button>
                <a>
                  <span className="third-login-icon weChat"></span>
                </a>
                <span className="third-login-icon weChatTeam"></span>
              </Space>
            </div>
          </Form>
        </Card>
      </Space>
    </div>
  );
}
