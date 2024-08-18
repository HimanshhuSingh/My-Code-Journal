import React, { useState } from 'react';



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
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
    <div>Use of useState in form</div>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}  />
        </div>
        <div><label>email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}  /></div>
        <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange}  />
        </div>
        
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form