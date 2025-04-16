import Head from "next/head";
import MainLayout from "@/app/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shipping Services | Sabari Marine</title>
        <meta name="description" content="Shipping Services" />
        <link rel="canonical" href="https://sabarimarine.co/" />
        <meta name="keywords" content="Freight Forwarding" />
      </Head>
      <MainLayout>
        <h1>Services</h1>
      </MainLayout>
    </>
  );
}

{
  /* 

  // import HeroSection from "@/components/pages/HeroSection";
// import InfoSection from "@/components/pages/InfoSection";
// import VarietySection from "@/components/pages/VarietySection";
// import Testimonials from "@/components/pages/Testimony";
// import RecipeSteps from "@/components/pages/RecipeSteps";
// import Pricing from "@/components/pages/Pricing";
// import DownloadSection from "@/components/pages/DownloadSection";
// import WhyChooseSection from "@/components/pages/WhyChooseSection";
// import NutrientTable from "@/components/pages/NutrientsTable";
// import SustainableChoice from "@/components/pages/SustainableChoice";

  <HeroSection />
  <SustainableChoice />
<WhyChooseSection />
<Pricing />
<VarietySection />
<RecipeSteps />
<Testimonials />
<InfoSection />
<NutrientTable />
<DownloadSection /> */
}
