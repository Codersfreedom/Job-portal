import { create } from "zustand";

const useJobStore = create((set) => ({
  jobs: null,
  isLoading: false,

  fetchAllJobs: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/job/fetchAll", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      if (data.status == true) {
        set({ jobs: data.jobs });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ jobs: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useJobStore;
