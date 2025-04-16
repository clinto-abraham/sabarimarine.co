// src/components/forms/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useSubmitForm();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Your First Name</label>
      <input
        {...register("firstName", { required: true })}
        placeholder="Enter your first name"
      />
      {errors.firstName && (
        <span className="error">First name is required</span>
      )}

      <label>Your Email Address*</label>
      <input
        {...register("email", { required: true })}
        placeholder="Enter your email address"
      />
      {errors.email && <span className="error">Email is required</span>}

      <label>Your Message*</label>
      <textarea
        {...register("message", { required: true })}
        placeholder="Type your message here"
      />
      {errors.message && <span className="error">Message is required</span>}

      <button
        type="submit"
        className="cta-button"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Submitting..." : "Submit Your Inquiry"}
      </button>
    </form>
  );
}
