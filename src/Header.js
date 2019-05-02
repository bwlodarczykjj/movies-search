import React from 'react';

class Header extends React.Component {
    render(){
    return <div>
        <img width='70' src='./img/logo.svg' alt='logo'/>
        <h2 className="title">Znajdź film by MoviesDB</h2>
    </div>
 }
}


export default Header;