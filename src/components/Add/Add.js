import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ContactContext} from "../../contexts/ContactsContext";

const Add = () => {
    const navigate = useNavigate()
    const {createContact,getContacts} = useContext(ContactContext)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [number, setNumber] = useState("")

    function handleSave() {
        if (!name || !surname || !number) {
            alert('Заполните все поля!')
        } else {
            let newContact = {
                name,
                surname,
                number,
            }
            createContact(newContact)
            navigate("/")
        }
        getContacts()
    }

    return (
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                marginTop:'100px'
            }}>
            <input className="inputs" value={name} onChange={e => setName(e.target.value)} placeholder="name" type="text" name="" />
            <input className="inputs" value={surname} onChange={e => setSurname(e.target.value)}  placeholder="surname" type="text" name="" />
            <input className="inputs" value={number} onChange={e => setNumber(e.target.value)}  placeholder="number" type="text" name="" />
            </div>
            <button style={{
                marginTop: '150px'
            }} className="btns" onClick={() => handleSave()}>Save</button>
        </div>
    );
};

export default Add;
