import React from 'react'
import { useState } from 'react';
import Form1 from './Form1'; 
import Form2 from './Form2'; 
import Form3 from './Form3';
import Form4 from './Form4';

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
  const [active ,setActive]=useState(0)
  const forms = [Form1, Form2, Form3,Form4];
  const CurrentForm = forms[active];

  return (
    <div>
      <CurrentForm  data={formData} setData={setFormData} activeData={active} setActiveData={setActive}/> 

    </div>
  )
}

export default Contoller