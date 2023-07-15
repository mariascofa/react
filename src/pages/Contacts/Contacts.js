import { useEffect, useReducer } from "react";
import InputFormat from "./InputFormat";
import "./contacts.css";

const initialState = {
  contacts: [],
  formaStatus: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { contacts: action.data, formaStatus: state.formaStatus };
    case "FORM_STATUS_CHANGE":
      return { contacts: state.contacts, formaStatus: action.data };
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.data],
        formaStatus: state.formaStatus,
      };
    case "DELETE_CONTACT":
      return { contacts: action.data };
    default:
      return state;
  }
}

function Contacts() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((resp) => {
          dispatch({ type: "SET_CONTACTS", data: resp });
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteContact = (id) => {
    const filteredContact = state.contacts.filter(
      (contact) => contact.id !== id
    );
    dispatch({ type: "DELETE_CONTACT", data: filteredContact });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, name, phone } = event.target.elements;
    const nameValue = name.value.trim();
    if (nameValue === "") {
      alert("Please enter a name.");
      return;
    }

    const lastId = state.contacts[state.contacts.length - 1].id;
    const newUser = {
      id: lastId + 1,
      username: username.value,
      name: name.value,
      phone: phone.value,
    };
    dispatch({ type: "ADD_CONTACT", data: newUser });
    formStatusChange();
  };

  const formStatusChange = () => {
    const updatedState = !state.formaStatus;
    dispatch({ type: "FORM_STATUS_CHANGE", data: updatedState });
  };

  return (
    <div>
      <h2>Contacts:</h2>
      {state.formaStatus ? (
        <InputFormat
          handleSubmit={handleSubmit}
          formStatusChange={formStatusChange}
        />
      ) : (
        <button onClick={() => formStatusChange()} className="submit_btn">
          Add Contact
        </button>
      )}

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.username}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  className="contact_btn"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
