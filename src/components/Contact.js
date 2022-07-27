import {
  FaStickyNote,
  FaTrash,
  FaPhoneSquareAlt,
  FaEnvelopeSquare,
} from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="contact">
      <h3>
        {contact.text}{" "}
        <FaTrash
          className="trash"
          style={{ color: "#DC143C", cursor: "pointer" }}
          onClick={() => onDelete(contact.id)}
        />
      </h3>
      <p>
        <FaPhoneSquareAlt style={{ color: "black" }} /> {contact.number}
      </p>
      <p>
        <FaEnvelopeSquare style={{ color: "black" }} /> {contact.email}
      </p>
      <p>
        <FaStickyNote style={{ color: "black" }} /> {contact.department}
      </p>
    </div>
  );
};

export default Contact;
