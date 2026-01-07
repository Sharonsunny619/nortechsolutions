"use client"
import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export default function ContactUs() {
  const [result, setResult] = React.useState("");

 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setResult("Sending....");

  const formData = new FormData(event.currentTarget);

  formData.append("access_key", "51cee24b-8988-4264-a0e1-6cb91795bb4a");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.currentTarget.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contactus"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with us
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        We&apos;d love to hear from you! if you have any questions,comments or
        feedbacks, please use the form below
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f]"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f]"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          placeholder="Enter your message"
          required
          className="min-h-[300px] w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f] mb-6"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="group py-3 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-[#225b85] to-[#666668] dark:bg-white text-white dark:text-black rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Submit now{" "}
          <MoveRight
            strokeWidth={1.5}
            className="transform-all duration-500 group-hover:translate-x-1.5"
          />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
}
