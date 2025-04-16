import React from "react";
import styles from "@/styles/components/Home/ContactUs.module.scss";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const submitContactUs = async (data) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const mutation = useMutation({
    mutationFn: submitContactUs,
    onSuccess: () => reset(),
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <section id="contact" className={styles.contactSection}>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us</h1>
        <p>Get in touch for all your shipping and freight needs.</p>
        <label>
          Your First Name
          <input
            type="text"
            placeholder="Enter your first name"
            {...register("firstName")}
          />
        </label>
        <label>
          Your Email Address*
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className={styles.error}>Email is required</span>
          )}
        </label>
        <label>
          Your Message*
          <textarea
            placeholder="Type your message here"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className={styles.error}>Message is required</span>
          )}
        </label>
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Submitting..." : "Submit Your Inquiry"}
        </button>
        {mutation.isError && (
          <p className={styles.error}>Submission failed. Please try again.</p>
        )}
        {mutation.isSuccess && (
          <p className={styles.success}>Your inquiry has been submitted!</p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;
