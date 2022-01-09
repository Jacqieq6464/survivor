import React, { useState } from "react";
const LoginForm = () => {
  // defining components state
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="email" name="userName" onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
