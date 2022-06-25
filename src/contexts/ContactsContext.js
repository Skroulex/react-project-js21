import React, {useReducer} from "react";
import axios from "axios";

export const ContactContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    oneContact: null
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_CONTACTS":
            return {...state, contacts: action.payload};
        case "GET_ONE_CONTACT":
            return {...state,oneContact: action.payload};
        default:
            return state;
    }
}

const ContactContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    //! CRUD
    const API = "http://localhost:8000/contacts";

    //! Create
    async function createContact(newContact) {
        await axios.post(API, newContact);
    }

    //! Read
    async function getContacts() {
        let res = await axios(API);
        dispatch({
            type: "GET_CONTACTS",
            payload: res.data,
        });
        // console.log(res.data);
    }

    //! Delete
    async function deleteContact(id) {
        await axios.delete(`${API}/${id}`);
        getContacts();
    }

    //Get for edit
    async function getOneContact(id) {
        let res = await axios(`${API}/${id}`)
        dispatch({
            type:"GET_ONE_CONTACT",
            payload: res.data
        })
    }
    // Update
    async function updateContact(id,editedContact){
        await axios.patch(`${API}/${id}`,editedContact)
        getContacts()
    }
    return (
        <ContactContext.Provider
            value={{contacts: state.contacts, createContact, getContacts, deleteContact, getOneContact,oneContact:state.oneContact, updateContact}}>
            {children}
        </ContactContext.Provider>
    );
};
export default ContactContextProvider;
