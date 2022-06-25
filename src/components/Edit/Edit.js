import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ContactContext} from "../../contexts/ContactsContext";

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {getOneContact, oneContact, updateContact} = useContext(ContactContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    useEffect(() => {
        getOneContact(id);
    }, [])
    useEffect(() => {
        if (oneContact) {
            setName(oneContact.name)
            setSurname(oneContact.surname)
            setNumber(oneContact.number)
        }
    }, [oneContact])

    function handleSave() {
        let editedContact = {
            name,
            surname,
            number,
        };
        updateContact(id, editedContact)
        navigate("/")
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center'
        }}>
            {oneContact ?
                <div style={{
                    display:"flex",
                    flexDirection:'column'
                }}>
                    <input className="inputs" value={name} onChange={e => setName(e.target.value)}/>
                    <input className="inputs" value={surname} onChange={e => setSurname(e.target.value)}/>
                    <input className="inputs" value={number} onChange={e => setNumber(e.target.value)}/>

                    <button className="btns" onClick={handleSave}>Save</button>
                </div>
                :
                <h2>Loading...</h2>}
        </div>
    );
};

export default Edit;
