/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import {ListView} from 'antd-mobile';
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }
];
const hasSessionIdData = {
  sessionId0: [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: '相约酒店',
      des: '不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: '麦当劳邀您过周末',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: '食惠周',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }
  ],
  sessionId1: [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: '相约酒店1',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: '麦当劳邀您过周末1',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: '食惠周1',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }
  ],
  sessionId2: [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: '相约酒店2',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: '麦当劳邀您过周末2',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }, {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: '食惠周2',
      des: '不是所有的兼职汪都需要风吹日晒',
      price: '14.00'
    }
  ]
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds,
      data: hasSessionIdData
    }
  }
  _renderRow(rowData, rowId, sectionId) {
    return (
      <div className="ListViewItem" onClick={() => this.handleShowSectionId(rowId)}>
        <div className="ListViewItem-left">
          <img src={rowData.img}/>
        </div>
        <div className="ListViewItem-right">
          <h5 className="title">{rowData.title}</h5>
          <p className="des">{rowData.des}</p>
          <p className="price">￥:{rowData.price}</p>
        </div>

      </div>
    )
  }
  handleShowSectionId(sectionId) {
    console.log(sectionId);
  }
  
  render() {
    return (
      <div >
        <ListView
          dataSource={this
          .state
          .dataSource
          .cloneWithRowsAndSections(this.state.data)}
          renderRow={(rowData, rowId, sectionId) => this._renderRow(rowData, rowId, sectionId)}
          className="fortest"
          style={{
          height: document.documentElement.clientHeight - 45 - 50,
          overflow: 'auto'
        }}
         
          onScroll={() => {
          console.log('scroll');
        }}/>
      </div>
    );
  }
}