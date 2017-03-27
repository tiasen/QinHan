/**
 * Created by tiasen-ubuntu on 17-3-25.
 */

import Text from '../components/personal/person';
import Pinker from '../components/personal/Pinker';
import Step from '../components/personal/stepper';

export default class Personal extends React.Component{

    render(){
       return (
           <div>
               <Text />
               <Pinker />
               <Step />
           </div>)

    }
}