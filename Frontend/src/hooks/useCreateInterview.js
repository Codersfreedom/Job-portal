import { useState } from "react";
import toast from "react-hot-toast";

export const useCreateInterview = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createInterview = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/interview/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });
      const data = await response.json();
      if (data.status == true) {
        return toast.success("Interview created & email send to candidates");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, createInterview };
};
