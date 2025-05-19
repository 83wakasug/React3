import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form2 = ({ data, setData, activeData, setActiveData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();



  const options = [
    { value: '500ドル未満', label: '500' },
    { value: '500〜1000ドル', label: '1000' },
    { value: '1000〜2000ドル', label: '2000' },
    { value: '2000ドル以上', label: '2000+' }
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
          {...register('salary', { required: '給与レンジを選択してください。' })}
        >
          <option value="">Choose one</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}

        <button type="button" onClick={handleBack}>Back</button>{' '}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form2;
