import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex w-full h-screen bg-black">
      <h1 className="text-7xl text-white uppercase">ERROR PAGE</h1>
      <h1 className="text-white text-5xl ">
        {error.statusText || error.message}
      </h1>
    </div>
  );
};

export default ErrorPage;
