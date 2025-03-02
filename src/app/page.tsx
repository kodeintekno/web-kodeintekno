import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortofolioSection from "@/components/PortofolioSection";
import Service from "@/components/Service";
import Team from "@/components/Team";
// import Team from "@/components/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Team />
      <PortofolioSection />
      <ContactUs />
      <Footer />
      <WhatsappButton />
    </>
  );
}
