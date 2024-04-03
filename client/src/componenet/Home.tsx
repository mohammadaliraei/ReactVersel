import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import axios from "axios";

const Home: React.FC = () => {
  const [name, setName] = useState<String>("");
  const [job, setJob] = useState<String>("");
  const [image, setImage] = useState<String>("");

  const handelSave = () => {
    axios
      .post("https://react-versel-api.vercel.app/create-users", {
        name,
        job,
        image,
      })
      .then((result) => {
        console.log(result);
        alert("User saved successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("failed to save user");
      });
  };

  return (
    <div className="flex justify-center bg-red-300 w-full h-screen">
      <div className="flex flex-col gap-5 bg-blue-50 p-10 rounded-md w-[40%]  border-4 my-11">
        <div className="flex bg-white rounded-md justify-end items-center px-5">
          <h1 className="flex w-[80%] justify-center font-bold text-3xl uppercase">
            Home
          </h1>
          <Link
            to={"/"}
            className="w-[10%]"
          >
            <MdDashboard size={30} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-10 bg-white px-5 py-12">
          <input
            className="w-full border-2 border-black px-4 rounded-md py-2"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border-2 border-black px-4 rounded-md py-2"
            placeholder="job"
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            className="w-full border-2 border-black px-4 rounded-md py-2"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <button
            className="bg-black text-white uppercase px-6 py-2 rounded-md"
            onClick={handelSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
