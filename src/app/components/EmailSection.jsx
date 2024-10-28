"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    status: "success",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      setModalContent({
        title: "Success!",
        message:
          "Your message has been sent successfully. We'll get back to you soon!",
        status: "success",
      });
      e.target.reset();
    } catch (error) {
      setModalContent({
        title: "Error",
        message:
          error.message || "Failed to send message. Please try again later.",
        status: "error",
      });
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2"
    >
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative z-50 w-full max-w-md rounded-lg bg-[#18191E] p-6 shadow-xl">
            <div
              className={`mb-4 text-2xl ${modalContent.status === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {modalContent.status === "success" ? "✓" : "×"}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              {modalContent.title}
            </h3>
            <p className="mb-6 text-gray-300">{modalContent.message}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className={`w-full rounded-lg px-4 py-2 text-white ${
                modalContent.status === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact info */}
      <div className="z-0">
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s Connect
        </h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-5 text-4xl text-white">
          <FaGithub
            href="https://github.com/UrayMR"
            className="hover:cursor-pointer hover:text-slate-500"
          />
          <FaLinkedin
            href="https://github.com/UrayMR"
            className="hover:cursor-pointer hover:text-slate-500"
          />
        </div>
      </div>

      {/* Form */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="username@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg bg-purple-500 px-5 py-2.5 font-medium text-white transition-all duration-500 hover:translate-y-2 hover:shadow-lg hover:shadow-purple-300 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
