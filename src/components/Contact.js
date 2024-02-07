import React from "react";
import { SiMinutemailer, SiInstagram, SiTwitter } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import "./components.css";

const Contact = () => {
  return (
    <div className="flex flex-row p-[140px] blur-0 z-10 justify-center text-black">
      <div className="flex flex-col mr-10">
        <div>
          <h1 className="font-bold flex flex-col items-center mb-7">
            Contact Us
            <div className="w-[30px] h-[2px] bg-white"></div>
          </h1>
          <div className="flex flex-row gap-5 items-center mb-2 text-lg">
            <SiMinutemailer className="text-xl" />
            <p>email</p>
          </div>
          <div className="flex flex-row gap-5 items-center mb-5 text-lg">
            <PiPhoneCallFill className="text-xl" />
            <p>Phone</p>
          </div>
          <div className="flex flex-row gap-5 items-center mb-5 text-lg">
            <PiPhoneCallFill className="text-xl" />
            <p>Address</p>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <SiInstagram className="text-xl" />
            <SiTwitter className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex">
        <form action="" onSubmit={""} className="flex flex-col gap-3 w-[700px]">
          <input
            type="text"
            name="Name"
            value={""}
            onChange={""}
            placeholder="name"
            className="p-3 rounded-md bg-slate-200 border-2"
            style={{ background: "#ffffff50" }}
          />
          <input
            type="email"
            name="Email"
            value={""}
            onChange={""}
            placeholder="email"
            className="p-3 rounded-md bg-slate-200 border-2"
            style={{ background: "#ffffff50" }}
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            value={""}
            onChange={""}
            placeholder="message"
            className="p-3 rounded-md bg-slate-200 border-2"
            style={{ background: "#ffffff50" }}
          ></textarea>
          <button
            type="submit"
            className="font-semibold text-lg border rounded-xl hover:text-slate-500 hover:border-slate-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
