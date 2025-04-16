// src/hooks/useSubmitForm.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSubmitForm = () => {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post("https://api.clinto.app", formData);
      return response.data;
    },
    onSuccess: (data) => {
      alert("Form submitted successfully!");
    },
    onError: () => {
      alert("Submission failed!");
    },
  });
};
