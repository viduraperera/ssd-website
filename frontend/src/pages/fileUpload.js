import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { Form, Input, Button, message, Upload, Select, Skeleton, Popconfirm, Tooltip } from 'antd';
import { InboxOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { addMessage } from '../actions/messageActions';
import { ROLES } from '../constants/Constants';

// import { uploadLecture, getLecture, updateLecture } from '../../actions/lectures';
// import { getModules } from '../../actions/Modules'


function AddFiles() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [filePath, setFilePath] = useState('')
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile"))?.user);
    }, []);

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
    const { TextArea } = Input;

    const onFinish = async (values) => {
        setLoadingBtn(true)

        const payload = {
            ...values,
            filePath,
            user: user.id
        }
        const res = await dispatch(addMessage(payload))
        if (res.status === 201) {
            message.success('Data Saved Successfully')
        } else {
            message.error(res.data)
        }

        setLoadingBtn(false)
    }

    const { Dragger } = Upload;

    const props = {
        name: 'file',
        multiple: false,
        action: 'http://localhost:5000/api/files',
        maxCount: 1,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                if (info.fileList.length > 0) {
                    setFilePath(info.file.response)
                } else {
                    setFilePath('')
                }
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const MainDiv = {
        width: "70%",
        border: "1px solid #98d1d9",
        marginTop: "35px",
        borderRadius: "10px",
    }

    const FormDiv = {
        display: "flex",
        justifyContent: "center"
    }

    const FormStyles = {
        width: "80%"
    }

    const FormCenterDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <>
            {loading ?
                <>
                    <Skeleton active />
                    <Skeleton active />
                    <Skeleton active />
                    <Skeleton active />
                </>
                :
                <div style={FormDiv}>
                    <div style={MainDiv}>
                        <br />
                        <div>
                            <div style={FormCenterDiv}>
                                <h2 style={{ textAlign: 'center', color: '#1890ff' }}>Upload File</h2>
                                <Form
                                    layout="vertical"
                                    form={form}
                                    name="register"
                                    onFinish={onFinish}
                                    scrollToFirstError
                                    style={FormStyles}
                                >
                                    <Form.Item
                                        name="message"
                                        label="Message"
                                    >
                                        <Input />
                                    </Form.Item>
                                    {user && user.userType === ROLES.MANAGER ?
                                        (<Form.Item>
                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single uploads only.
                                                </p>
                                            </Dragger>
                                        </Form.Item>)
                                        :
                                        <></>
                                    }
                                    <Form.Item {...tailFormItemLayout}>
                                        <div className="center">
                                            <Button type="primary" htmlType="submit" loading={loadingBtn} style={{ padding: '0 175px' }}>
                                                Upload
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            }
        </>
    )
}

export default AddFiles
