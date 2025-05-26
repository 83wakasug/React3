import React from 'react';
import { useForm } from 'react-hook-form';

const Form3 = ({ data, setData, activeData, setActiveData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  const onSubmit = (formValues) => {
    setData({ ...data, ...formValues });
    setActiveData(activeData + 1);
  };

  const handleBack = () => {
    setActiveData(activeData - 1);
  };

  return (
    <div
  className="min-h-screen flex justify-center items-center bg-gray-50"
  style={{ width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box' }}
>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[900px] bg-white shadow-md rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Loan Details</h2>

        {/* Purpose of Loan */}
        <div className="mb-6">
          <label htmlFor="purposeOfLoan" className="block mb-2 text-lg font-medium text-gray-700">
            Purpose of Loan:
          </label>
          <input
            type="text"
            id="purposeOfLoan"
            {...register('purposeOfLoan', { required: 'Required to fill purpose of loan' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.purposeOfLoan && (
            <p className="text-red-500 text-sm mt-1">{errors.purposeOfLoan.message}</p>
          )}
        </div>

        {/* Repayment Term */}
        <div className="mb-6">
          <label htmlFor="repaymentTerm" className="block mb-2 text-lg font-medium text-gray-700">
            Repayment Term (Years):
          </label>
          <input
            type="number"
            id="repaymentTerm"
            {...register('repaymentTerm', { required: 'Need to fill repayment term' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.repaymentTerm && (
            <p className="text-red-500 text-sm mt-1">{errors.repaymentTerm.message}</p>
          )}
        </div>

        {/* Comment */}
        <div className="mb-8">
          <label htmlFor="comment" className="block mb-2 text-lg font-medium text-gray-700">
            Comment:
          </label>
          <input
            type="text"
            id="comment"
            {...register('comment')}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-lg font-medium"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
