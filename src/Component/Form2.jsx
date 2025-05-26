import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form2 = ({ data, setData, activeData, setActiveData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  const [selectedSalary, setSelectedSalary] = useState(data.salary || '');

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const options = [
    { value: 'Under $500', label: 'Under $500' },
    { value: '$500–$1000', label: '$500–$1000' },
    { value: '$1000–$2000', label: '$1000–$2000' },
    { value: 'Over $2000', label: 'Over $2000' },
  ];

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
        <h2 className="text-2xl font-bold mb-8 text-center">Employment & Loan Details</h2>

        {/* Have a job checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="havejob"
            {...register('haveJob')}
            className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="havejob"
            className="ml-3 block text-lg font-medium text-gray-700 select-none"
          >
            Have a job
          </label>
        </div>

        {/* Salary Range select */}
        <div className="mb-6">
          <label htmlFor="salary" className="block mb-2 text-lg font-medium text-gray-700">
            Salary Range:
          </label>
          <select
            id="salary"
            {...register('salary', { required: 'Please select a salary range.' })}
            onChange={handleSalaryChange}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedSalary}
          >
            <option value="">Choose one</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.salary && (
            <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
          )}
          {selectedSalary === 'Under $500' && (
            <p className="text-gray-500 italic mt-2">
              This is a small loan amount. Approval is easier.
            </p>
          )}
        </div>

        {/* Desired loan amount */}
        <div className="mb-8">
          <label htmlFor="amount" className="block mb-2 text-lg font-medium text-gray-700">
            Desired loan amount:
          </label>
          <input
            type="number"
            id="amount"
            {...register('amount', { required: 'Need to fill loan amount' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">{errors.amount?.message}</p>
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
