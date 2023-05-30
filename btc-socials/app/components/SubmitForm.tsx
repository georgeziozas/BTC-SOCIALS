"use client";

import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import { error } from "console";

export default function SubmitForm() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    logo: "",
    title: "",
    standard: "",
    twitter: "",
    discord: "",
    telegram: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          logo: formData.logo,
          title: formData.title,
          standard: formData.standard,
          twitter: formData.twitter,
          discord: formData.discord,
          telegram: formData.telegram,
          userId: session?.user?.email, // We're assuming you are storing user in your component's state
        }),
      });
      console.log("response body:" + response.body);
      const result = await response.json();
      console.log("response on form:" + JSON.stringify(result));
      if (response.ok) {
        console.log("Form successfully submitted");
        // Handle success - maybe show a notification or redirect the user
      } else {
        console.log("Form submission failed");
        // Handle error - show a notification or handle error
      }
    } catch (error) {
      return "SubmitForm:" + error;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full space-y-8">
        <form
          className="mt-8 space-y-6 bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Submit Project
          </h2>

          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="logo">
              Upload Project Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="text"
              className="w-full py-2 border-gray-300 rounded-md"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="title">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleInputChange}
              className="w-full py-2 border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <span className="text-gray-600 mb-2 block">
              Choose a token standard
            </span>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="standard"
                value="BRC-20"
                onChange={handleInputChange}
              />
              <span className="ml-2">BRC-20</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="standard"
                value="SRC-20"
                onChange={handleInputChange}
              />
              <span className="ml-2">SRC-20</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="standard"
                value="ORC-20"
                onChange={handleInputChange}
              />
              <span className="ml-2">ORC-20</span>
            </label>
          </div>

          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="twitter">
              Twitter Link
            </label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              onChange={handleInputChange}
              className="w-full py-2 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="discord">
              Discord Link
            </label>
            <input
              type="url"
              id="discord"
              name="discord"
              onChange={handleInputChange}
              className="w-full py-2 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="telegram">
              Telegram Link
            </label>
            <input
              type="url"
              id="telegram"
              name="telegram"
              onChange={handleInputChange}
              className="w-full py-2 border-gray-300 rounded-md"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}
