import React from 'react';

const Form4 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 sm:px-6 md:px-8">
      <div
        className="w-full max-w-[900px] bg-white shadow-md rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-green-600">Thank you for applying!</h2>
        <p className="text-lg text-gray-700">
          We appreciate your application. Our team will review it and get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Form4;
