import React from 'react'
import { useForm } from 'react-hook-form';

const Form1 = ({ data, setData ,activeData,setActiveData }) => {

  const {register,handleSubmit,formState:{errors},}=useForm();
  const onSubmit = (formValues) => {
    console.log(formValues);
    setData({ ...data, ...formValues });
    setActiveData(activeData + 1);
  };

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" {...register("name",{required: "Need to fill name"})} 
        />
        <p>{errors.name?.message}</p>
        
        
        <label htmlFor="phone">Phone Number:</label>
        <input type="number" id="phone" {...register("phone",{required: "Need to fill Phone number"})} />
        <p>{errors.phone?.message}</p>

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" {...register("age",{required: "Need to fill Age"})} />
        <p>{errors.age?.message}</p>

        <button type="submit">next</button>
        
      </form>
    </div>
  );
};

export default Form1