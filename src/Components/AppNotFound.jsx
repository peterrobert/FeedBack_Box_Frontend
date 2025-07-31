import React from "react";

const AppNotFound = () => {
  return (
    <section
      id="error-section"
      className="h-[80vh] flex flex-col items-center justify-center px-5"
    >
      <div id="error-illustration" className="mb-8">
        <div className="w-48 h-48 mx-auto">
          <img
            className="w-full h-full"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8a2f7a14ec-16e202d8da452b371170.png"
            alt="lost compass or map illustration, broken compass, minimalist design, pink and purple gradient, light theme, transparent background"
          />
        </div>
      </div>

      <div id="error-content" className="text-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-xs mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col w-full gap-3 max-w-xs mx-auto">
          <span className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-full text-center shadow-custom cursor-pointer">
            Back to Home
          </span>
          <span className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full text-center hover:bg-gray-50 cursor-pointer">
            Report This Issue
          </span>
        </div>
      </div>
    </section>
  );
};

export default AppNotFound;
