import React, { useState, useEffect } from 'react';
import Form1 from './Form1'; 
import Form2 from './Form2'; 
import Form3 from './Form3';
import Form4 from './Form4';

const Contoller = () => {
  
 
  const data = {
    name: '',
    phone: '',
    age: '',
    haveJob: false,
    salary: '',
    amount: '',
    purposeOfLoan: '',
    repaymentTerm: '',
    comment: ''
  };

  const[formData,setFormData]=useState(data);
  const [active ,setActive]=useState(0)
  const forms = [Form1, Form2, Form3,Form4];
  const CurrentForm = forms[active];

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // formData が更新されたら sessionStorage に保存
  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  
    
  
 



  return (
    <div>
      <CurrentForm  data={formData} setData={setFormData} activeData={active} setActiveData={setActive}/> 

    </div>
  )
}

export default Contoller