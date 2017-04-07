/**
 * Created by 365969 on 2017/4/6.
 */
import {
    Form, Select, InputNumber, Switch, Radio,Input,
    Slider, Button, Upload, Icon,Checkbox,message,Row,Col,Modal
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import TreeSelect from './TreeSelect';
import CheckboxGroup from './CheckboxGroup';
import UploadAvatar from './UploadAvatar';
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
]
const CollectionCreateForm = Form.create()(
    (props) => {
        const {titleText,onCancel,onCreate,handleChangeImg,beforeUpload,visible,imageUrl} = props;
        const { getFieldDecorator } = props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 18 }
        };

        return (
            <Modal visible={visible}
                   title="Create a new collection"
                   okText="Create"
                   onCancel={onCancel}
                   onOk={onCreate}>
                <Form onSubmit={onCreate}>

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
                            getValueFromEvent: handleChangeImg,
                        })(
                            <Upload
                                className="avatar-uploader"
                                name="avatar"
                                showUploadList={false}
                                action="/upload.do"
                                beforeUpload={beforeUpload}

                            >
                                {
                                   imageUrl ?
                                        <img src={imageUrl} alt="" className="avatar" /> :
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
                                { message: 'Please select your favourite colors!', type: 'array' },
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
                                {  message: 'Please select your favourite colors!', type: 'array' },
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
                                {  message: 'Please select your favourite colors!', type: 'array' },
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

                </Form>
            </Modal>
        );
    }
);

export default class CollectionsPage extends React.Component {
    state = {
        checkedList: defaultCheckedList,
        visible: false,
    }
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {addMenuItem} = this.props;
        this.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload(file) {
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
            return info.file;
        }
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        const {addMenuItem,titleText,history} = this.props;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleSubmit}
                    addMenuItem={addMenuItem}
                    titleText={titleText}
                    history={history}
                    handleChangeImg={(info) =>this.handleChangeImg(info)}
                    beforeUpload={file => this.beforeUpload(file)}
                    imageUrl = {this.state.imageUrl}
                />
            </div>
        );
    }
}