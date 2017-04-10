import { Icon } from 'antd-mobile';
import MyCarousel from './../components/home/MyCarousel';

export default class Home extends React.Component{
    render(){
        const {history} = this.props;
        return (
            <div>
                <MyCarousel />
                <div id="test">testttst</div>
                <div>
                    <button onClick={() => (history.push('/about')) }>about</button>
                    <button onClick={() => (history.push('/topics')) }>topics</button>
                </div>
            </div>
        )
    }
}
