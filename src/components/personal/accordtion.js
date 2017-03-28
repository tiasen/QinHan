/**
 * Created by 365969 on 2017/3/28.
 */
import { Accordion, List,Flex } from 'antd-mobile';
import Checkbox from './checkbox';
export default class AccordionExmple extends React.Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" accordion={true}>
                    <Accordion.Panel header="标题一">
                        <Checkbox />
                    </Accordion.Panel>
                    <Accordion.Panel header="标题一">
                        <List className="my-list">
                            <Flex>
                                <Flex.Item>
                                    <div>子内容一</div>
                                </Flex.Item>
                                <Flex.Item>
                                    <div>子内容一</div>
                                </Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item>
                                    <div>子内容一</div>
                                </Flex.Item>

                            </Flex>

                        </List>
                    </Accordion.Panel>
                </Accordion>

            </div>
        );
    }
}