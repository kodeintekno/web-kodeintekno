import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <ContactUs />
      <Footer />
    </>
  );
}
