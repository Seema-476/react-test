import React from 'react'
import { useState } from 'react';

const FormValidation = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
      selectColor: '',
      number: ''
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formData);
    };

  

    return (
      <div className="flex justify-center items-center py-12">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-[400px]">
          <h2 className="text-3xl font-bold text-black mb-3 text-center">Form Validation</h2>
          <div className="mb-4">
            <label className="text-black">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
     
          <div className="mb-4">
            <label className="text-black">Last Name</label>
            <input type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"/>
          </div>

          <div className="mb-4">
            <label className="text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"/>
          </div>

          <div className="mb-4">
            <label className="text-black">Password</label>
            <input
              type="password" name="password" value={formData.password} onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"/>
          </div>

          <div className="mb-4">
            <label className="text-black">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"/>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-black">I agree to the terms and conditions</label>

          </div>

          <div className="mb-4">
            <label className="text-black">Select a color</label>
            <select
              name="selectOption"
              value={formData.selectOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none">
              <option value="Red">Red</option>
              <option value="BLue">Blue</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-black">Number</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"/>
          </div>

          <button type="submit"
            className="px-4 py-2 bg-black text-white rounded">Submit
          </button>
        </form>
      </div>
  )
}

export default FormValidation
