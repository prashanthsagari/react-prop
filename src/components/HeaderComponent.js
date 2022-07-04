import React from "react";
import './Body.css';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component!!</h2>
                {/* Call LogoComponent here without any props */}

                {/* Call CommonComponent by sending prop value as text="This is a view title content" */}
            </div>
        );
    }
}
export default HeaderComponent;