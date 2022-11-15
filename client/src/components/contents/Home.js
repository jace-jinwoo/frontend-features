import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";

const Home = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
      const {username, password} = values;
      axios.post("/login", {username, password}).then( res => {
        console.log("call login API :: ", res);
      })
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <>
        <Form
        name="basic"
        labelCol={{span: 3}}
        wrapperCol={{span: 7}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset: 3, span: 7}}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 3, span: 7}}>
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
        </Form>
        </>
    )
}

export default Home;