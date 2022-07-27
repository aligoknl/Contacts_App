import { useState } from "react";

const AddContact = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a value");
      return;
    }
    onAdd({ text, number, email, department });

    setText("");
    setNumber("");
    setEmail("");
    setDepartment("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Contact Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="number"
          placeholder="Add Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Contact" className="btn btn-block" />
    </form>
  );
};
export default AddContact;
