import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <p>
        <em>My Contacts </em>
        <br></br>helps you to store your contacts in one place.
      </p>
      <br></br>
      <h4>Version 1.0.0</h4>
      <br></br>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
