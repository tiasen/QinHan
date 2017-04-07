
import EditTable from '../common/EditTable';
import Field from '../common/Field';
export default class Basic extends React.Component{
    render(){
        return (
            <div className="basicPage">
                <h3>Taste</h3>
                <EditTable />
                <hr className="line"/>
                <h3>Size</h3>
                <EditTable />
                <hr className="line"/>
                <h3>Other</h3>
                <Field />
            </div>
        )
    }
}