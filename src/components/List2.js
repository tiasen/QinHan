import ZScroller from 'zscroller';
import 'zscroller/assets/index.css';
require('../../dist/js/EasyScroller')

export default class List2 extends React.Component {
    render() {
        return (
            <div
                id="container"
                style={{
                    width: "100%",
                    height: 400,
                    border: '1px solid green',
                    padding: 10,
                    margin: '10px auto',
                    position: 'relative',
                    boxSizing:'border-box'
                }}
            >
                <div id="content" style={{boxSizing:'border-box', height: 800, width: '100%', border: '1px solid red' }}>

                </div>
            </div>
        )
    }
}
