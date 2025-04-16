import React from "react";
import Head from "next/head";
import "@/styles/pages/home.scss";
import MainLayout from "@/app/MainLayout";
import Testimonial from "@/components/pages/Home/Testimonial";
import LocationOverview from "@/components/pages/Home/LocationOverview";
import OurServices from "@/components/pages/Home/OurServices";
import About from "@/components/pages/Home/About";
import ContactUs from "@/components/pages/Home/ContactUs";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-hook-form/queryClient";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shipping Services | Sabari Marine Enterprise Home</title>
        <meta name="description" content="Welcome to Shipping Services" />
        <link rel="canonical" href="https://sabarimarine.co/" />
        <meta name="keywords" content="Freight Forwarding" />
      </Head>
      <MainLayout>
        <QueryClientProvider client={queryClient}>
          {/* Hero Section */}
          <section className="hero">
            <h2>
              Expert Freight
              <br />
              Forwarding Services
            </h2>
            <p>Reliable shipping solutions for import and export needs.</p>
            <button className="cta-button">Get Started</button>
          </section>

          {/* Services */}
          <section className="services">
            <div className="service-card">
              <h3>Freight Forwarding</h3>
              <p>Comprehensive logistics for your shipping requirements.</p>
            </div>
            <div className="service-card">
              <h3>Container Services</h3>
              <p>Efficient container channeling for seamless transport.</p>
            </div>
            <div className="service-card">
              <h3>Shipping Solutions</h3>
              <p>Trusted import and export solutions for businesses.</p>
            </div>
          </section>
          <OurServices />
          <About />
          <ContactUs />
          <LocationOverview />
          <Testimonial />
        </QueryClientProvider>
      </MainLayout>
    </>
  );
}
