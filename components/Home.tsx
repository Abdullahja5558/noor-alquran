import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const RecitersSection = dynamic(() => import("@/components/RecitersSection"), {
  ssr: true,
});

const CollectionsSection = dynamic(() => import("@/components/CollectionsSection"), {
  ssr: true,
});

const Topics = dynamic(() => import("@/components/Topic"), {
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecitersSection />
      <CollectionsSection />
      <Topics />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;