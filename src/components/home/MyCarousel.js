import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class MyCarousel extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);
    this.setState({
      initialHeight:200
    })
   
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank className="t-carousel">
        <Carousel
          className="my-carousel" autoplay={false} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: 200,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>

        <WhiteSpace />
        {/*<div className="sub-title">vertical</div>
        <Carousel className="my-carousel"
          dots={false} dragging={false} swiping={false} autoplay infinite vertical
        >
          <div className="v-item">Carousel 1</div>
          <div className="v-item">Carousel 2</div>
          <div className="v-item">Carousel 3</div>
        </Carousel>*/}
      </WingBlank>
    );
  }
}