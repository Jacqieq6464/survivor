import React, { useState } from "react";
const RegisterForm = () => {
  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    therapist: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label>
          Password:
          {/* research how to validate password length using jsx attributes */}
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label>
          Therapist:
          <input type="text" name="therapist" onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
