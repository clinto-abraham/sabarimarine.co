import Head from "next/head";
import HeroSection from "@/components/pages/HeroSection";
import MainLayout from "@/app/MainLayout";
import InfoSection from "@/components/pages/InfoSection";
import VarietySection from "@/components/pages/VarietySection";
import Testimonials from "@/components/pages/Testimony";
import RecipeSteps from "@/components/pages/RecipeSteps";
import Pricing from "@/components/pages/Pricing";
import DownloadSection from "@/components/pages/DownloadSection";
import WhyChooseSection from "@/components/pages/WhyChooseSection";
import NutrientTable from "@/components/pages/NutrientsTable";
import SustainableChoice from "@/components/pages/SustainableChoice";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EcoZion",
    image: "https://ecozion.in/logo.png",
    url: "https://ecozion.in",
    telephone: "+91-8590770477",
    address: {
      "@type": "PostalAddress",
      streetAddress: "EcoZion Farms, MG Road",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    description:
      "EcoZion delivers fresh organic mushrooms in Kerala and Bangalore. Order Lion’s Mane, Oyster, and more online.",
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: [
      "https://www.instagram.com/ecozion",
      "https://www.facebook.com/ecozion",
    ],
  };

  return (
    <>
      <Head>
        <title>Buy Mushrooms in Kerala - EcoZion</title>
        <meta
          name="description"
          content="Looking for fresh mushrooms in Kerala? EcoZion delivers organic mushrooms in Kochi, Trivandrum, and across Kerala."
        />
        <link rel="canonical" href="https://ecozion.in/mushroom-in-kerala" />
        <meta
          name="description"
          content="Fresh mushrooms delivered across Kerala and Bangalore. Organic, locally grown with love by EcoZion."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <MainLayout>
        <HeroSection />

        <SustainableChoice />
        <WhyChooseSection />
        <Pricing />
        <VarietySection />
        <RecipeSteps />
        <Testimonials />
        <InfoSection />
        <NutrientTable />
        <DownloadSection />
      </MainLayout>
    </>
  );
}
