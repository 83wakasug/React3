import React from "react";
import { useForm } from 'react-hook-form';

const Form3 = ({ data, setData, activeData, setActiveData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (formValues) => {
    console.log(formValues);

    setData({
      ...data,
      ...formValues,
    });

    setActiveData(activeData + 1);
    console.log(data)
  };

  const handleBack = () => {
    setActiveData(activeData - 1);
  };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="purposeOfLoan">Purpose of Loan:</label>
          <input
            type="text"
            id="purposeOfLoan"
            {...register('purposeOfLoan', {
              required: 'Required to fill purpose of loan',
            })}
          />
          {errors.purposeOfLoan && <p>{errors.purposeOfLoan.message}</p>}

          <label htmlFor="repaymentTerm">Repayment Term (Years):</label>
          <input
            type="number"
            id="repaymentTerm"
            {...register("repaymentTerm", {
              required: "Need to fill repayment term",
            })}
          />
          {errors.repaymentTerm && <p>{errors.repaymentTerm.message}</p>}

          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            {...register('comment')}
          />

          <button type="button" onClick={handleBack}>Back</button>{' '}
          <button type="submit">Submit</button>
        </form>

    </div>
  );
};

export default Form3;