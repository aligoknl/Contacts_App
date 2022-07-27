import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import About from "./components/About";

const App = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };

    getContacts();
  }, []);

  // Fetch Contacts
  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts");
    const data = await res.json();

    return data;
  };

  // Add Contact
  const addContact = async (contact) => {
    const res = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    const data = await res.json();

    setContacts([...contacts, data]);
  };

  // Delete Contact
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setContacts(contacts.filter((contact) => contact.id !== id))
      : alert("Error Deleting This Contact");
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddContact(!showAddContact)}
          showAdd={showAddContact}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddContact && <AddContact onAdd={addContact} />}
                {contacts.length > 0 ? (
                  <Contacts contacts={contacts} onDelete={deleteContact} />
                ) : (
                  "No Contact To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
