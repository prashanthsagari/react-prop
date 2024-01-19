import './Common.css'
function CommonComponent(props) {
    return (
        <div className="CommonComponent">
            {props.text}
            <h2></h2>
        </div>
    );
}

export default CommonComponent;