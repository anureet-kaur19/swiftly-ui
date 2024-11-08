import React, { useState } from 'react';
import axios from 'axios';

const Account = () => {
  // States to handle form inputs and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission with proper type for the event parameter
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDto = {
      email,
      password,
      firstName,
      lastName,
      role
    };

    try {
      // Replace this URL with your user service API's registration endpoint
      const response = await axios.post('http://localhost:8081/api/users/register', userDto);

      // Assuming successful response
      if (response.status === 201) {
        setSuccessMessage('User registered successfully!');
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Account Management</h1>
      <p>Here you can view and manage accounts.</p>

      <h2>Register New User</h2>

      {/* Show success or error message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Account;
