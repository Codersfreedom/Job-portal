import toast from "react-hot-toast";
import { create } from "zustand";

const useCompanyauthStore = create((set, get) => ({
  company: null,
  companyId: null,
  companyEmail:null,
  isLoading: true,

  signup: async (authData) => {
    try {
      const response = await fetch("/api/company/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...authData }),
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, company: data.user });
        toast.success("Account created");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ company: null });
      toast.error(error.message);
    } finally {
      set({ isLoading: false });
    }
  },

  sendOtp: async (email) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/company/auth/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.status == true) {
        set({ companyId: data.userId, isLoading: false,companyEmail:email });
        toast.success(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      set({ isLoading: false,companyEmail:null });
    }
  },
  verifyOtp: async (otp) => {
    set({ isLoading: true });
    const companyId = get().companyId;
    if (!companyId) {
      return toast.error("No user found!");
    }
    try {
      const response = await fetch("/api/company/auth/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOtp: otp, userId:companyId }),
      });

      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, company: data.user,companyEmail:null });
        toast.success("Login success");
      } else {
        
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }finally{
      
      set({ isLoading: false });
    }
  },

  checkCompanyauth: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/company/auth/checkAuth", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.user)
      if (data.status == true) {
        set({ isLoading: false, company: data.user });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false, company: null });
    }
  },
  logout: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/company/auth/logout", {
        method: "POST",
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, company: null,companyId:null });
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

export default useCompanyauthStore;
