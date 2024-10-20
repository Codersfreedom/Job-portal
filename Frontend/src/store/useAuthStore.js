import toast from "react-hot-toast";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  userId: null,
  isLoading: false,

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
  verifyOtp: async () => {},

  login: async () => {},
}));

export default useAuthStore;
