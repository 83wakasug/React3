import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form2 = ({ data, setData, activeData, setActiveData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [selectedSalary, setSelectedSalary] = useState('');
  
  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };


  const options = [
    { value: 'Under $500', label: 'Under $500' },
    { value: '$500–$1000', label: '$500–$1000' },
    { value: '$1000–$2000', label: '$1000–$2000' },
    { value: 'Over $2000', label: 'Over $2000' }
  ];


  const onSubmit = (formValues) => {
    console.log(formValues);

    setData({
      ...data,
      ...formValues,
    });

    setActiveData(activeData + 1);
  };

  const handleBack = () => {
    setActiveData(activeData - 1);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="havejob">Have a job:</label>
        <input
          type="checkbox"
          id="havejob"
          {...register('haveJob')}
        />

        <label htmlFor="salary">Salary Range:</label>
        <select
          id="salary"
          {...register('salary', { required: 'Please select a salary range.' })}
          onChange={(e)=>{
              handleSalaryChange(e);
          }
        }
        >
          <option value="">Choose one</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.salary && <p>{errors.salary.message}</p>}
        {selectedSalary === 'Under $500' && (
          <p style={{ color: 'gray', fontStyle: 'italic' }}>
            This is a small loan amount. Approval is easier.
         </p>
        )}
     
        <label htmlFor="amount ">Desired loan amount :</label>
        <input type="number" id="amount" {...register("amount",{required: "Need to fill loan amount"})} />
        <p>{errors.amount?.message}</p>

        <button type="button" onClick={handleBack}>Back</button>{' '}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form2;
