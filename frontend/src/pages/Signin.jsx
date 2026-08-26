import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/AuthStore";
import { toast } from "react-hot-toast";

const Signin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { message } = await login(username, password);
      toast.success(message);
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

        <div className="w-full max-w-md rounded-lg bg-black p-8">

          <h1 className="mb-7 text-3xl font-medium text-white">
            Sign In
          </h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col space-y-4"
          >

            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="h-[50px] w-full rounded bg-[#333] px-5 text-base text-white outline-none placeholder:text-gray-400"
            />

            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="h-[50px] w-full rounded bg-[#333] px-5 text-base text-white outline-none placeholder:text-gray-400"
            />

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}

            <button
              disabled={isLoading}
              type="submit"
              className="w-full cursor-pointer rounded bg-[#e50914] py-2 text-base text-white hover:opacity-90"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <div className="mt-10 text-sm text-[#737373]">
            <p>
              New to Cinveo?

              <span
                onClick={() => navigate("/signup")}
                className="ml-2 cursor-pointer font-medium text-white hover:underline"
              >
                Sign Up Now
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signin;