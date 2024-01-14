import React from "react";

const Contact = () => {
  return (
    <div className=" text-black w-full max-w-[1280px] mx-auto   ">
      <h1 className="text-center lg:text-4xl text-2xl font-semibold mb-10">
        We'd love to hear from you
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 ">
        <div className="border border-black rounded p-8 flex flex-col">
          <h1 className="text-center text-3xl font-semibold">
            I have a technical question
          </h1>
          <p className="p-4 text-center">
            In any case you encounter a technical problem, you can ask a
            question and we will reach back to you in maximum 24 hours, only in
            weekdays.
          </p>
          <button className="text-center bg-purple text-white hover:bg-blue p-4 rounded duration-300 font-semibold mt-10 justify-center">
            Submit a ticket
          </button>
        </div>
        <div className="border border-black rounded p-8 flex flex-col">
          <h1 className="text-center text-3xl font-semibold">
            I have a proposal
          </h1>
          <p className="p-4 text-center">
            If you are interested in the affiliate program we suggest you to
            contact us via our oficial email, click on the button below to be
            directed
          </p>
          <button className="text-center bg-purple text-white hover:bg-blue p-4 rounded duration-300 font-semibold mt-10">
            Send a form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
