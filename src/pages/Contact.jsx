import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className=" min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Email
              </h3>
              <p className="text-gray-600">contact@example.com</p>
              <p className="text-gray-600">support@example.com</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Phone
              </h3>
              <p className="text-gray-600"> (885) 123-4567</p>
              <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Location
              </h3>
              <p className="text-gray-600">123 Business Street</p>
              <p className="text-gray-600">Phnom Penh, PP 10001</p>
            </div>
            <div className="flex gap-10 bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow text-4xl">
              <h1></h1>
              <Link target="_blank"  rel="noopener noreferrer" to='https://web.facebook.com/visethsopheach'><FaFacebookSquare /></Link>
              <Link target="_blank"  rel="noopener noreferrer" to='https://www.instagram.com/viseth_sopheach/'><FaInstagramSquare/></Link>
              <Link target="_blank"  rel="noopener noreferrer" to='https://t.me/Viseth_Sopheach'><FaTelegram /></Link>
              <Link target="_blank"  rel="noopener noreferrer" to='https://x.com/VisethSopheach'><FaSquareXTwitter /></Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;