import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = "https://cinevo-7t6o.onrender.com/api";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  message: null,
  fetchingUser: true,

  // SIGNUP
  signup: async (username, email, password) => {
    set({ isLoading: true, message: null, error: null });

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        username,
        email,
        password,
      });

      set({
        user: response.data.user,
        isLoading: false,
        error: null,
      });

      return response.data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error Signing up",
      });

      throw error;
    }
  },

  // LOGIN
  login: async (username, password) => {
    set({ isLoading: true, message: null, error: null });

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      const { user, message } = response.data;

      set({
        user,
        message,
        isLoading: false,
        error: null,
      });

      return { user, message };
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error logging in",
      });

      throw error;
    }
  },

  // FETCH USER
  fetchUser: async () => {
    set({ fetchingUser: true, error: null });

    try {
      const response = await axios.get(`${API_URL}/fetch-user`);

      set({
        user: response.data.user,
        fetchingUser: false,
        error: null,
      });

      return response.data;
    } catch (error) {
      set({
        fetchingUser: false,
        error: null,
        user: null,
      });

      throw error;
    }
  },

  // LOGOUT
  logout: async () => {
    set({
      isLoading: true,
      error: null,
      message: null,
    });

    try {
      const response = await axios.post(`${API_URL}/logout`);

      const { message } = response.data;

      set({
        message,
        isLoading: false,
        user: null,
        error: null,
      });

      return { message };
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response?.data?.message || "Error logging out",
      });

      throw error;
    }
  },
}));