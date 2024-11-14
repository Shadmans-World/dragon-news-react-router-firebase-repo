import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-6xl text-red-500 mb-4">404</h1>
        <h2 className="text-2xl text-gray-800 mb-2">Oops! Page not found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for might have been moved or deleted.
        </p>
        <a
          href="/"
          className="text-lg text-blue-500 border-2 border-blue-500 px-6 py-2 rounded-full inline-block transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
