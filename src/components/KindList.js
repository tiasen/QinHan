/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import {ListView} from 'antd-mobile';

const data = ['柴','米','油','盐','柴','米','油','盐','米','油','盐','柴','米','油','盐'];


export default class KindList extends React.Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource:ds,
      data:data
    }
  }
  _renderRow(dataBlob,rowsId){
    return(
      <div className="kindlist-item">
        <span>{dataBlob}</span>
      </div>
    )
  }
  
  render() {
    return (
      <div >
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(dataBlob,rowsId) => this._renderRow(dataBlob,rowsId)}
          style={{
          height: document.documentElement.clientHeight - 45 - 50,
          overflow: 'auto',  
        }} 
          scrollerOptions={{scrollbars: false,bouncing :true}}
          onScroll={() => {
          console.log('scroll');
        }}/>
      </div>
    );
  }
}