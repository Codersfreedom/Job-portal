import toast from "react-hot-toast";
import { create } from "zustand";

const useStudentAuthStore = create((set) => ({
  student: null,
  isLoading: true,

  applyJob: async (id) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`/api/student/job/apply/${id}`, {
        method: "PUT",
      });
      const data = await response.json();
      if (data.status == true) {
        set((state) => ({
          student: {
            ...state.student,
            applied: {
              ...state.student.applied,
              jobs: [...state.student.applied.jobs, id],
            },
          },
        }));
        toast.success(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      set({ isLoading: false });
    }
  },
  signup: async (authData) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...authData }),
      });

      const data = await response.json();
      set({ isLoading: false, student: data.student });
    } catch (error) {
      console.log(error.message);
    }
  },
  login: async (authData) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...authData }),
      });
      const data = await response.json();

      if (data.status == true) {
        set({ isLoading: false, student: data.student });
        toast.success("Login success");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      set({ isLoading: false, student: null });
    }
  },
  checkStudentAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/auth/checkAuth", {
        method: "GET",
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, student: data.student });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false, student: null });
    }
  },
  studentLogout: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/auth/logout", {
        method: "POST",
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false, student: null });
        toast.success("Logout success");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  },
}));

export default useStudentAuthStore;
