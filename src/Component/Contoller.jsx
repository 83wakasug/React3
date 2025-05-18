import React from 'react'
import { useState } from 'react';
import Form1 from './Form1'; 

const Contoller = () => {
  
  const data = {
    name: '',
    phone: '',
    age: '',
    occupation: '',
    salary: '',
    loanAmount: '',
    reason: '',
    repayment: '',
    comments: ''
  }

  const[formData,setFormData]=useState(data);

  return (
    <div>
      <Form1   data={formData} setData={setFormData} /> 

    </div>
  )
}

export default Contoller