import toast from "react-hot-toast";
import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  user: null,
  userId: null,
  isLoading: false,

  signup: async (authData) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...authData }),
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, user: data.user });
        toast.success("Account created");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  },

  sendOtp: async (email) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/auth/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      set({ userId: data.userId, isLoading: false });
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false });
    }
  },
  verifyOtp: async (otp) => {
    set({ isLoading: true });
    const userId = get().userId;
    if (!userId) {
      return toast.error("No user found!");
    }
    try {
      const response = await fetch("/api/auth/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOtp: otp, userId }),
      });

      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, user: data.user });
        toast.success("Login success");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      set({ isLoading: false });
    }
  },

  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/auth/checkAuth", {
        method: "GET",
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, user: data.user });
      }else{
        throw new Error(data.message)
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false,user:null });
    }
  },
  logout: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, user: null });
        toast.success("Logout success");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false });
      toast.error(error.message);
    }
  },
}));

export default useAuthStore;
