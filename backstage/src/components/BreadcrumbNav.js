/**
 * Created by 365969 on 2017/4/6.
 */
import { Link } from 'react-router';
import {Breadcrumb} from 'antd';
export default class nav extends React.Component{
    itemRender(route, params, routes, paths) {
        console.log(route)
        console.log(routes)
        console.log(paths)
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
    }
    render(){

        return <Breadcrumb itemRender={this.itemRender} />;
    }
}


