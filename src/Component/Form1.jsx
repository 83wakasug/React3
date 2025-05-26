import React from 'react';
import { useForm } from 'react-hook-form';

const Form1 = ({ data, setData, activeData, setActiveData }) => {
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

  return (
<div
  className="min-h-screen flex justify-center items-center bg-gray-50"
  style={{ width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box' }}
>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-[900px] bg-white shadow-md rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
  >
        <h2 className="text-2xl font-bold mb-8 text-center">Basic Information</h2>

        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Need to fill name' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="number"
            {...register('phone', { required: 'Need to fill Phone number' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
        </div>

        {/* Age */}
        <div className="mb-8">
          <label htmlFor="age" className="block mb-2 text-lg font-medium text-gray-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register('age', { required: 'Need to fill Age' })}
            className="w-full h-14 text-lg border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">{errors.age?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form1;
