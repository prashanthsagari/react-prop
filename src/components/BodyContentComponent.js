import './Body.css';

function BodyContentComponent(props) {
    return (
        <div className="BodyContent">
            {props.content}
            <h4></h4>
        </div>
    );
}

export default BodyContentComponent;