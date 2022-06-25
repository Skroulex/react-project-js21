import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div >
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'50px'
            }}>
                <Link to="/add">
                    <button className="btns">Add contact</button>
                </Link>
                <Link  to="/">
                    <button style={{
                        marginRight: "10px"
                    }} className="btns">Contacts</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
