import React from "react";

const AuthFallBack = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="mb-4 text-lg font-medium">Loading...</p>
        <div className="animate-spin h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default AuthFallBack;
