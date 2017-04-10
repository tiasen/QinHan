/**
 * Created by 365969 on 2017/4/6.
 */
import {
    Form, Select, InputNumber, Switch, Radio,Input,
    Slider, Button, Upload, Icon,Checkbox,message,Row,Col
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange','Apple1', 'Pear1', 'Orange1'];
const defaultCheckedList = ['Apple', 'Orange'];

const taste = [
    {
        "name": "哈哈",
        "id": "taste-0",
        "addM": 0
    },
    {
        "name": "哈哈1",
        "id": "taste-1",
        "addM": 2
    },
    {
        "name": "哈哈2",
        "id": "taste-2",
        "addM": 3
    },
    {
        "name": "哈哈3",
        "id": "taste-3",
        "addM": 0
    },
    {
        "name": "哈哈4",
        "id": "taste-4",
        "addM": 0
    }
];
class Demo extends React.Component {
    state = {
        checkedList: defaultCheckedList
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            //message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isLt2M;
    }
    handleChangeImg = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }

    render() {
        const {addMenuItem,titleText,history} = this.props;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        return (
            <Form onSubmit={this.handleSubmit}>

                <FormItem
                    {...formItemLayout}
                    label="Plain Text"
                >
                    <span className="ant-form-text">{titleText}</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Switch"
                >
                    {getFieldDecorator('switch', { valuePropName: 'checked',initialValue:true })(
                        <Switch />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Name"
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Input placeholder="Please select a country" type="text" />

                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Description"
                    hasFeedback
                >
                    {getFieldDecorator('description', {
                        rules: [
                            { required: true, message: 'Please select your country!',max:20 },
                        ],
                    })(
                        <Input placeholder="Please select a country" type="text" />

                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Image"
                    hasFeedback
                >
                    {getFieldDecorator('image', {
                        valuePropName: 'imageList',
                        getValueFromEvent: this.handleChangeImg,
                    })(
                        <Upload
                            className="avatar-uploader"
                            name="avatar"
                            showUploadList={false}
                            action="/upload.do"
                            beforeUpload={this.beforeUpload}

                        >
                            {
                                this.state.imageUrl ?
                                    <img src={this.state.imageUrl} alt="" className="avatar" /> :
                                    <Icon type="plus" className="avatar-uploader-trigger" />
                            }
                        </Upload>

                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Size"
                >
                    {getFieldDecorator('size', {
                        rules: [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="Please select favourite colors">
                            {/*<Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>*/}
                            {taste.map((item,i) => (<Option value={JSON.stringify(item)} key={i}>{item.name}</Option>))}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Taste"
                >
                    {getFieldDecorator('taste', {
                        rules: [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="Please select favourite colors">
                            {/*<Option value="red">Red</Option>
                             <Option value="green">Green</Option>
                             <Option value="blue">Blue</Option>*/}
                            {taste.map((item,i) => (<Option value={JSON.stringify(item)} key={i}>{item.name}</Option>))}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Other"
                >
                    {getFieldDecorator('other', {
                        rules: [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="Please select favourite colors">
                            {/*<Option value="red">Red</Option>
                             <Option value="green">Green</Option>
                             <Option value="blue">Blue</Option>*/}
                            {taste.map((item,i) => (<Option value={JSON.stringify(item)} key={i}>{item.name}</Option>))}
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <Row >
                        <Col span={5}><Button type="primary" htmlType="submit">Submit</Button></Col>
                        <Col span={5}><Button type="default" onClick={() => history.goBack()} >Cancel</Button></Col>
                    </Row>
                </FormItem>

            </Form>
        );
    }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo;



