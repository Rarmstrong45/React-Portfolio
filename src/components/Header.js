import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h2><a href = "/">Ryan Armstrong</a></h2>
            {props.children}
        </header>
    );
}

export default Header;