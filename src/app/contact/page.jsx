"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* <div className="h-full  lg:flex" ref={containerRef}> */}
      <div className="h-full overflow-y-auto  flex flex-col lg:flex-row  gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48" >
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl p-10">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="h-auto  mt-5 lg:mt-5lg:h-full lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="h-full mx-10 w-full mt-10  bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center align-center px-20 pt:5 lg:p-4"
          >
            <span>Dear Aidan,</span>
            <textarea
              rows={5}
              className="border-b-2 border-b-black outline-none resize-none"
              name="user_message"
            />
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="text"
              className="border-b-2 border-b-black outline-none"
            />
            {/* bg-transparent  */}
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </div>
      {/* </div> */}
    </motion.div>
  );
};

export default ContactPage;