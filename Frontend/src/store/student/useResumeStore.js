import { create } from "zustand";

const useResumeStore = create((set) => ({
  resume: null,
  isLoading: false,

  fetchResume: async () => {},
  updateProfile: async ({ full_name, domain, institute, batch, image }) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/resume/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_name, domain, institute, batch, image }),
      });
      const data = await response.json();

      if (data.status) {
        set({ resume: data.resume });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ isLoading: false });
    }
  },
  getResume: async () => {
    set({isLoading:true})
    try {
      const response = await fetch("/api/student/resume", {
        method: "GET",
      });
      const data = await response.json();
      if (data.status) {
        set({ resume: data.resume });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useResumeStore;
