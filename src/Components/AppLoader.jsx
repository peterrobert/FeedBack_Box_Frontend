import React from "react";

const AppLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-dots loading-md bg-gradient-to-r from-primary to-secondary-light "></span>
      <span className="loading loading-dots loading-lg bg-gradient-to-r from-primary to-secondary-light"></span>
      <span className="loading loading-dots loading-xl bg-gradient-to-r from-primary to-secondary-light"></span>
    </div>
  );
};

export default AppLoader;
