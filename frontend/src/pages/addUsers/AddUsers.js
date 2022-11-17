import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, message, Select } from "antd";

import { getUser, register as registerUser } from "../../actions/auth";

export default function Register() {
    const dispatch = useDispatch();
    const { Option } = Select;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const admin = useSelector((state) => state.auth.user);

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        setLoading(true);
        const res = await dispatch(registerUser(values));
        if (res.status === 200) {
            message.success("Registered Successfully");
            form.resetFields();
        } else if (res.response.status === 409) {
            message.error("User already exits. Please Login");
        } else {
            message.error("Register Error");
        }
        setLoading(false);
    };

    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <h2 style={{ textAlign: "center" }}>Register User</h2>
            <Form
                layout="vertical"
                form={form}
                name="register"
                onFinish={handleSubmit}
                scrollToFirstError
            >
                <Form.Item
                    name="firstName"
                    label="FirstName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your First Name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Last Name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="passwordConfirmation"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The two passwords that you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="userType"
                    label="Role"
                    rules={[
                        {
                            required: true,
                            message: "Please select a role!",
                        },
                    ]}
                >
                    <Select placeholder="select role">
                        <Option value="Worker">Worker</Option>
                        <Option value="Manager">Manager</Option>
                    </Select>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
