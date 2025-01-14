import React from "react";
import './Body.css';
import LogoComponent from './LogoComponent';
import CommonComponent from './CommonComponent';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component!!</h2>
                <LogoComponent />

                <CommonComponent text="This is a view title content" />
                {/* Call CommonComponent by sending prop value as text="This is a view title content" */}
            </div>
        );
    }
}
export default HeaderComponent;