import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/AuthStore";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading, error } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(username, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-5 md:px-8 md:py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bg-1.webp')",
      }}
    >
      <div className="flex min-h-[90vh] items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-black/75 p-8">

          <h1 className="mb-7 text-3xl font-medium text-white">
            Sign Up
          </h1>

          <form
            onSubmit={handleSignUp}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="name"
              className="h-[50px] w-full rounded bg-[#333] px-5 text-base text-white outline-none placeholder:text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-[50px] w-full rounded bg-[#333] px-5 text-base text-white outline-none placeholder:text-gray-400"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className="h-[50px] w-full rounded bg-[#333] px-5 text-base text-white outline-none placeholder:text-gray-400"
            />

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer rounded bg-[#e50914] py-2 text-base text-white hover:opacity-90"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-10 text-sm text-[#737373]">
            <p>
              Already have an account?

              <span
                onClick={() => navigate("/signin")}
                className="ml-2 cursor-pointer font-medium text-white hover:underline"
              >
                Sign In Now
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;