import React, {useContext, useEffect} from 'react';
import {ContactContext} from "../../contexts/ContactsContext";
import {useNavigate} from "react-router-dom";

const List = () => {
    const {getContacts, contacts, deleteContact} = useContext(ContactContext)
    const navigate = useNavigate();
    useEffect(() => {
        getContacts();
    }, [])
    return (
        <div className="scroll"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}>
            {contacts.map(item => (
                <div key={item.id}>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        alignItems:'center',
                    }}>
                    <div className="names">{item.name}</div>
                    <div className="names surname">{item.surname}</div>
                    <div className="names number">{item.number}</div>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <button style={{
                        margin: "10px 0",
                        padding:"10px 30px"
                    }} className="btns" onClick={() => deleteContact(item.id)}>Delete
                    </button>
                    {" "}
                    <button style={{
                        margin: "10px 0",
                        padding:"10px 30px"
                    }} className="btns" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
