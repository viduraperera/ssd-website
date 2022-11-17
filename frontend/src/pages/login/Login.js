import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login as loginUser } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { Form, Input, Button, message } from "antd";
import { ROLES } from "../../constants/Constants";
import "../../index.css";
// import LoginImage from "../../Images/draw2.png";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        const res = await dispatch(loginUser(values));
        console.log(res);
        if (res.status === 200) {
            message.success("Logged in  Successfully");
            if (res.data.user.userType === ROLES.ADMIN) {
                history.push("/register");
            } else {
                history.push("/files");
            }
        } else {
            message.error("Login Error");
        }
        setLoading(false);
    };

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

    return (
        <div>
            <div
                style={{
                    width: "auto",
                    margin: "100px",
                    border: "2px solid #9fd1ff",
                    paddingBlockStart: "20px",
                    paddingBlockEnd: "20px",
                    alignContent: "center",
                }}
            >
                <div>
                    <div className="container-fluid">
                        <div>
                            <div className="" style={{ padding: "30px" }}>
                                <h2 style={{ textAlign: "center", color: "#1d3ffa" }}>Login</h2>
                                <Form
                                    layout="vertical"
                                    form={form}
                                    name="register"
                                    onFinish={handleSubmit}
                                    scrollToFirstError
                                >
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

                                    <Form.Item {...tailFormItemLayout}>
                                        <div className="center">
                                            <Button
                                                style={{ padding: "0 130px" }}
                                                type="primary"
                                                htmlType="submit"
                                                loading={loading}
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
