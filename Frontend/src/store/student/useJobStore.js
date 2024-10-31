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
  fetchJob: async (id) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`/api/student/job/fetch/${id}`, {
        method: "GET",
      });
      const data = await response.json();

      if (data.status == true) {
        set({ isLoading: false });
        return data.job;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false });
    }
  },
  fetchAppliedJobs: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/job/fetchApplied", {
        method: "GET",
      });

      const data = await response.json();
      if (data.status == true) {
        return data.jobs;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchAppliedInternships: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/student/internship/fetchApplied", {
        method: "GET",
      });

      const data = await response.json();
      if (data.status == true) {
        return data.internships;
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

export default useJobStore;
