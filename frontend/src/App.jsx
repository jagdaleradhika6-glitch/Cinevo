import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Moviepage from "./pages/Moviepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AIRecommendations from "./pages/AIRecommendations";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./Store/AuthStore";

const App = () => {
  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p className="text-[#e50914]">Loading...</p>;
  }

  return (
    <div>
      <Navbar />

      <Toaster />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/movie/:id" element={<Moviepage />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/ai-recommendations"
          element={<AIRecommendations />}
        />
      </Routes>
    </div>
  );
};

export default App;