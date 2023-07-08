import React from 'react';

export default function Navbar() {
    return (
        <header>
        <div className="nav">
            <a href="#" className="logo"></a>
            <a href="#"><navtext>Marketplace</navtext></a>
            <a href="#"><navtext>Collection</navtext></a>
            <a href="#"><navtext>Community</navtext></a>
            <a href="#"><navtext>Create</navtext></a>
            <div className="nav-profile">
                <img src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar"/>
                <a href="#" className="username">Aliba Kamilbully</a>
            </div>
        </div>
    </header>
    )
}
