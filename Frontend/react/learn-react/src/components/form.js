import React, { useState } from 'react';
import fieldContainer from './styles.css';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <>
    <h2>FORM:</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <div className="field-container">
        <label>Name </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}  />
        </div>

        <div className="field-container">
        <label>email </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}  />
        </div>

        <div className="field-container">
        <label>Password </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange}  />
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form