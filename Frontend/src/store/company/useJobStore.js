import { create } from "zustand";
import toast from "react-hot-toast";

const useJobStore = create((set) => ({
  isLoading: false,

  postJob: async (jobData) => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/company/job/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...jobData }),
      });
      const data = await response.json();
      if (data.status == true) {
        set({ isLoading: false });
        toast.success("Job posted!");
      }else{
        throw new Error(data.message)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }finally{
      set({isLoading:false});
    }
  },
}));

export default useJobStore;
