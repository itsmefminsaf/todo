"use client";

import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const JoinForm = () => {
  const router = useRouter();
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(uname);
    console.log(pwd);
    router.push("/");
  };

  return (
    <div className="relative w-80 min-[450px]:w-96 aspect-[3/4] bg-stone-100 rounded-xl shadow-2xl">
      <h1 className="text-center text-black text-4xl font-extrabold m-6">
        Join Trace
      </h1>
      <form
        className="text-slate-900 mx-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="p-4">
          <label htmlFor="uname" className="text-2xl font-bold">
            Enter your username
          </label>
          <input
            autoFocus
            type="text"
            placeholder="Ex:Elon Musk"
            id="uname"
            className="input"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="p-4">
          <label htmlFor="pwd" className="text-2xl font-bold">
            Enter password
          </label>
          <input
            type="password"
            placeholder="Ex: *******"
            id="pwd"
            className="input"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="absolute bottom-3 right-5 bg-black text-white py-3 px-10 rounded-3xl outline-none"
        >
          Join
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
