import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center bg-red-300 w-full ">
      <div className="flex flex-col gap-5 bg-blue-50 p-10 rounded-md w-[70%] border-4 my-11">
        <div className="flex bg-white rounded-md justify-end items-center px-5">
          <h1 className="flex w-[80%] justify-center font-bold text-3xl uppercase">
            Dashboard
          </h1>
          <Link
            to={"/home"}
            className="w-[10%]"
          >
            <FaUserCircle size={30} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {users?.map((user: any, i: any) => {
            const { name, job, image } = user;
            return (
              <div
                key={i}
                className="flex flex-col gap-4"
              >
                <img
                  src={image}
                  className="w-96 h-96 object-cover object-top rounded-lg"
                />
                <h1 className="text-3xl font-bold">{name}</h1>
                <h1 className="text-3xl ">{job}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
