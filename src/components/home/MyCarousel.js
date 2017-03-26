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
                src={`https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490537233306&di=c18e18ae3eff408e1806593df76f3249&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F38%2F47%2F19300001391844134804474917734_950.png`}
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