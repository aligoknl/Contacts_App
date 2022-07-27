import Contact from "./Contact";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Contacts;
