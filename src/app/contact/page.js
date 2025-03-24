"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="section bg-white">
        <div className="container">
          <h1 className="text-center mb-12">Contact Me</h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn btn-primary"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {status === "success" && (
                  <p className="mt-4 text-green-600">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-[#0D6EFD] hover:underline"
                    >
                      your.email@example.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Social Media</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0D6EFD]"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0D6EFD]"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0D6EFD]"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Location</h3>
                    <p className="text-gray-600">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
